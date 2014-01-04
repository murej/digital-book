/*
*	Basic configurations for the creation of a book.
*/
var config = {
	 hypothesis   : set_hypothesis(),
	 data         : get_data(),
	 bibliography : get_sources()
}

book = write(config);

print(book.user(id).conclusion);



set_hypothesis() {}
get_data() {}
get_sources() {}