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
