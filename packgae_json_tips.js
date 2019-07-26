
/*
The tilde ~ matches the most recent patch version (the third number) for the specified minor version (the second number).
~1.2.3 will match all 1.2.x versions but will hold off on 1.3.0.

The caret ^ is more relaxed. It matches the most recent minor version (the second number) for the specified major version (the first number).
^1.2.3 will match any 1.x.x release including 1.3.0, but will hold off on 2.0.0.
*/
