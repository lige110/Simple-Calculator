# Simple Calculator

Simple Calculator is a simple web service which calculates the result from a string input.

The service offers an endpoint that reads a string input with base64 encoding and parses it, then returns a solution to the calculation in JSON or error message.

## API Description

### Endpoint /calculus

`GET /calculus?query=[input]`

The input is expected to be UTF-8 with BASE64 encoding,Supported operations: + - * / ( )

Return:

On success: JSON response of format:

```javascript
{ error: false, result: number }
```

On error: JSON response of format:

``` javascript
{ error: true, message: string }
```

potential errors:
"Mismatched parentheses", "Division by zero", "Insufficient operands for operator"

## Usage

### Installation

```bash
$ npm install
```

### Serve

To serve in the browser - Run simple calculator server

```bash
$ npm start
```

### Test

To test the service with Jest

```bash
$ npm test
```

### Build

compile and build

```bash
$ npm build
```

## More Info

### Author

Meng Li
