---
sidebar: auto
sidebarDepth: 3
---
## 定时监测MySQL进程终止后自动重启的方法

## 前言



最近发现[MySQL](https://cloud.tencent.com/product/cdb?from=10680)服务隔三差五就会挂掉，导致我的网站和爬虫都无法正常运作。自己的网站是基于MySQL，在做爬虫存取一些资料的时候也是基于MySQL，数据量一大了，MySQL它就有点受不了了，时不时会崩掉，虽然我自己有[网站监控](https://cloud.tencent.com/product/cat?from=10680)和邮件通知，但是好多时候还是需要我来手动连接我的服务器重新启动一下我的MySQL，这样简直太不友好了，所以，我就觉定自己写个脚本，定时监控它，如果发现它挂掉了就重启它。



运行环境：Linux centos7



## 编写Shell脚本



首先，我们要编写一个shell脚本，脚本主要执行的逻辑如下：



显示mysqld进程状态，如果判断进程未在运行，那么输出日志到文件，然后启动mysql服务，如果进程在运行，那么不执行任何操作，可以选择性输出监测结果。



可能大家对于shell脚本比较陌生，在这里推荐官方的shell脚本文档来参考一下



[Ubuntu Shell 编程基础](http://wiki.ubuntu.org.cn/Shell编程基础)



shell脚本的后缀为sh，在任何位置新建一个脚本文件，我选择在 /etc/mysql 目录下新建一个 listen.sh 文件。



执行如下命令：



```js
cd /etc/mysql
touch listen.sh
vi listen.sh
```



进入到vi中，我们添加如下脚本内容：



```js
#!/bin/bash
pgrep mysqld &> /dev/null
if [ $? -gt 0 ]
then
echo "`date` mysql is stop"
service mysql start
else
echo "`date` mysql running"
fi
```



其中 pgrep mysqld 是监测mysqld服务的运行状态，&> /dev/null 是将其结果输出到空文件，也就是不保存输出信息

$? 是拿到上一条命令的运行结果，-gt 0 是判断是否大于0，后面则是输出时间到日志文件，然后启动mysql，否则不启动mysql

保存好了，那么我们执行如下的命令，来测试一下。



![img](https://raw.githubusercontent.com/chaojilaoshi/storage/main/images/1489065643770_3489_1489065644838.jpg)

贴心的命令文字版本：



```js
root@iZ28uogb3laZ:/etc/mysql# vi listen.sh
root@iZ28uogb3laZ:/etc/mysql# pgrep mysqld
3359
root@iZ28uogb3laZ:/etc/mysql# chmod 777 listen.sh
root@iZ28uogb3laZ:/etc/mysql# ./listen.sh
Sun Aug 16 16:44:58 CST 2015 mysql running
root@iZ28uogb3laZ:/etc/mysql# sudo service mysql stop
mysql stop/waiting
root@iZ28uogb3laZ:/etc/mysql# ./listen.sh
Sun Aug 16 16:45:17 CST 2015 mysql is stop
mysql start/running, process 4084
root@iZ28uogb3laZ:/etc/mysql# ./listen.sh
Sun Aug 16 16:45:24 CST 2015 mysql running
root@iZ28uogb3laZ:/etc/mysql#
```



嗯，编辑完了.sh文件之后，我们首先要对其进行授权，增加可执行的权限。



```js
sudo chmod 777 listen.sh
```



然后运行脚本测试一下，显示mysql正在运行。把mysql关掉，运行脚本，便会检测到mysql已关闭，然后重新启动了mysql，再次运行，便会发现mysql正常运行了。



## 修改日志输出



好，接下来我们把输出的内容保存到日志里。修改脚本文件如下



```js
#!/bin/bash
pgrep mysqld &> /dev/null
if [ $? -gt 0 ]
then
echo "`date` mysql is stop" >> /var/log/mysql_listen.log
service mysql start
else
echo "`date` mysql running" >> /var/log/mysql_listen.log
fi
```



这样，每执行一次脚本，输出结果都会被保存到 /var/log/mysql_listen.log 中了。



## 添加定时任务



好了，脚本可以顺利执行了，那么我们就需要定时调用一下这个脚本来运行了，我们需要用到 cron。



首先我们需要编辑一下corn调度表格，命令如下：



```js
crontab -e
```



如果你是第一次编辑这个，他会让你选择文件打开方式，随便选一个数字就好了。



比如我们用GNU打开的，我们就在它的最后一行添加下面的一句话即可。



![img](https://raw.githubusercontent.com/chaojilaoshi/storage/main/images/1489065870837_9272_1489065871767.jpg)

文字版本：



```js
*/5 * * * * /etc/mysql/mysql_listen.sh
```



/5代表五分钟执行一次，后面的四个点依次代表了，小时，日，月，星期。如果想要时间长一些，比如一小时调度一次，那就设置一下后面第一个*就好了。



好，保存一下，重启cron服务。



```js
service cron restart
```



嗯，调度任务已经添加进去了，这样，每五分钟系统就会调用一下刚才写的那个脚本。



过一段时间，我们来看一下运行效果，嗯，监控跑的很顺利呐。



![img](https://raw.githubusercontent.com/chaojilaoshi/storage/main/images/1489065956935_9124_1489065958010.jpg)


## 结语



这样，我们就实现了五分钟定时检测MySQL进程服务，妈妈再也不用担心我的网站会宕掉啦。

