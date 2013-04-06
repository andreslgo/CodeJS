CodeJS - jQuery Fields Validation Plugin
================================

Fields validation using Jquery

This code allows instantaneous field validations according to the type of data it contains.

Among the fields that are valid:

* Integers
* Floats

## Getting Started

Include jQuery and the plugin on a page. Then select a field to validate and call the method.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Example for Fields Validation</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="js/jquery-1.9.0.min.js"></script>
        <script src="js/fields.validation.js"></script>
    </head>
    <body>
        <div>
            <form>
                <label for="integer">Integer:</label><input type="text" name="integer" id="integer" /><br />
                <label for="float">Float:</label><input type="text" name="float" id="float" />
            </form>
        </div>
    </body>
    <script>
        $("#integer").entero();
        $("#float").decimal();
    </script>
</html>
```
Check the file example.html.

## License
Copyright (c) 2013 Andres Luque
Licensed under the BSD License