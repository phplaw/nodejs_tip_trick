### Check the size of content of a directory
```bash
du -sh $ANDROID_HOME
# this is more readable
du -sch $ANDROID_HOME

# save this to file calculate then run `calculate directory_path` to see the magic
#!/bin/sh
find $1 -type f -print0 | xargs -0 stat -f'%z' | awk '{b+=$1} END {print b}' | awk '{ sum=$1 ; hum[1024**3]="Gb";hum[1024**2]="Mb";hum[1024]="Kb"; for (x=1024**3; x>=1024; x/=1024){ if (sum>=x) { printf "%.2f %s\n",sum/x,hum[x];break } }}'
```
#### Uninstall Android Studio on MacOSX
```bash
#!/bin/bash
rm -Rf /Applications/Android\ Studio.app
rm -Rf ~/Library/Preferences/AndroidStudio*
rm -Rf ~/Library/Preferences/com.google.android.*
rm -Rf ~/Library/Preferences/com.android.*
rm -Rf ~/Library/Application\ Support/AndroidStudio*
rm -Rf ~/Library/Logs/AndroidStudio*
rm -Rf ~/Library/Caches/AndroidStudio*
rm -Rf ~/.AndroidStudio*
rm -Rf ~/AndroidStudioProjects
rm -Rf ~/.gradle
rm -Rf ~/.android
rm -Rf ~/Library/Android*
rm -Rf ~/.emulator_console_auth_token
# /usr/local/var/lib/android-sdk/
# echo $(whoami), echo $USER, echo $(pwd), pwd
```

### Check java on mac
```bash
java -version
echo $JAVA_HOME
```
### Open hidden file on MACOSX
```bash
open -e .bash_profile

source ~/.bash_profile

touch ~/.bash_profile; open -e ~/.bash_profile
```
### Unload an automatic launch from MAC
```bash
sudo launchctl unload -w /Library/LaunchAgents/com.adobe.AAM.Updater-1.0.plist
```

### Set enviroment variables in MAC
```bash
#!/bin/sh
export VARIABLE="value" 
export VARIABLE2="value2"
run_program
# OR source ./config.sh
````
### make a shellscript on MAC
```bash
chmod u+x hello_world.sh
./hello_world.sh

# hello_world.sh content
#!/bin/sh
 
FIRST_ARGUMENT="$1"
echo "Hello, world $FIRST_ARGUMENT!"
```
### Open hidden file in MAC
No setting but you can hit `cmd + shift + .` in the open file dialog to see hidden files`

# Display list environemt variables in MACOSX
We can use `env  OR printenv`

### Run Visual Studio Code from command line
To manually add VS Code to your path:
```bash
cat << EOF >> ~/.bash_profile
# Add Visual Studio Code (code)
export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
EOF
```
### Check evironment variable was set
```bash
if [ -z "$var" ]; then echo "var is blank"; else echo "var is set to '$var'"; fi
```
### Resource for learning bash script on MAC OSX
https://developer.apple.com/library/archive/documentation/OpenSource/Conceptual/ShellScripting/shell_scripts/shell_scripts.html
