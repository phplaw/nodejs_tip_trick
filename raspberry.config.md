### Disable autostart emulationstation
Assuming you have remote access via SSH enabled... edit
"/opt/retropie/configs/all/autostart.sh"
and comment out the emulationstation line with a "#" (should be the first and only line).

```bash
sudo nano /opt/retropie/configs/all/autostart.sh
```
default user: `pi` passsword: `raspberry`


```cp -rf /etc/dhcpcd.conf /etc/dhcpcd.conf.back```
```sudo vi /etc/dhcpcd.conf```
```
interface eth0
static ip_address=192.168.1.177/24
static routers=192.168.1.1
static domain_name_servers=192.168.1.1

interface wlan0
static ip_address=192.168.1.177/24
static routers=192.168.1.1
static domain_name_servers=192.168.1.1
```

after all step above u need to reboot to see effected by the change
```sudo reboot```

```sudo apt-get install lightdm```


https://retropie.org.uk/download/
https://www.raspberrypi.org/downloads/raspbian/
https://www.raspberrypi.org/downloads/noobs/
https://www.hongkiat.com/blog/pi-operating-systems/
