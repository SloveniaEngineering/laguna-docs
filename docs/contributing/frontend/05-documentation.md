# Documentation

To generate documentation for your Flutter project, you can use the `dartdoc` tool, which is a Dart
documentation generator. Dartdoc generates API reference documentation and can also be used to
generate documentation for your Flutter project.

To generate Flutter documentation, follow these steps:

1. Ensure that you have the `dartdoc` tool installed. You can install it using the following
   command:
    ```sh
    pub global activate dartdoc
    ```

2. Run the dartdoc command to generate the documentation:
    ```sh
    dart doc .
    ```

By default, the documentation is generated to the doc/api directory as static HTML files.

3. You can view the generated docs directly from the file system, but if you want to use the search
   function, you
   must load them with an HTTP server.

An easy way to run an HTTP server locally is to use the dhttpd package. For example:

```sh
dart pub global activate dhttpd
dhttpd --path doc/api
```

Navigate to http://localhost:8080 in your browser; the search function should now work.