### Save docker image to a tar file
You will need to save the Docker image as a tar file:

```docker save -o <path for generated tar file> <image name>
```
Then copy your image to a new system with regular file transfer tools such as cp or scp. After that you will have to load the image into Docker:

```docker load -i <path to image tar file>```
PS: You may need to sudo all commands.

EDIT: You should add filename (not just directory) with -o, for example:

```docker save -o c:/myfile.tar centos:16```
