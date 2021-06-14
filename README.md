# Simple Calculator

Simple Calculator is a simple web service which calculates the result from a string input.

The service offers an endpoint that reads a string input with base64 encoding and parses it, then returns a solution to the calculation in JSON or error message.

## API Description

### Endpoint /calculus

`GET /calculus?query=[input]`

The input is expected to be UTF-8 with BASE64 encoding, the supported operations: + - * / ( )

Return:

On success: JSON response of format:

```javascript
{ error: false, result: number }
//example url = .../calculus?query=MiAqICgyMy8oMyozKSktIDIzICogKDIqMyk
//calculate 2 * (23/(3*3))- 23 * (2*3)
//result
{error: false, result: -132.88888889}
```

On error: JSON response of format:

``` javascript
{ error: true, message: string }
//example url = .../calculus?query=MiAqICgyMy8oMyozKSktIDIzICogKDIqMwo
//calculate 2 * (23/(3*3))- 23 * (2*3
//result
{error: true, message: "Mismatched parentheses"}
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

## Deployment (AWS)

### Step 1: Create an sample AWS Elastic Beanstalk application

Go to AWS Elastik Beanstalk service, create a new application named `Simple-Calculator`.

Then choose the platform as Node.js, and in the application code section, choose sample application.

### Step 2: Create a CodePipeline

Go to AWS CodePipeline service, click create pipeline named `simple-calculator-pipe`. Then create a new service role called `calculator-pipe-role`.

Then in the source provider section, choose `Github`, and connect to the simple-calculator project in the github. Now the pipeline will automatically re-deploy the app whenever there is a commit in the github.com/lige110/Simple-Calculator

Next, skip the build stage.

Next, in the deploy stage, choose `AWS Elastic Beanstalk` for Deploy provider. Choose `Simple-Calculator` for the application name and `Simplecalculator-env` for the environment name.

Finally review the whole pipeline and create the pipeline.

### Step 3: Assign the load-balancer of the calculator a meaningful URL

Go to AWS Route53 service, choose a hosted zone and then create a new record in this hosted zone. And assign this URL to the calculator app's load-balancer.

Please visit <http://calculator.limengblog.com> for a live demo.
(example: calculus?query=MiAqICgyMy8oMyozKSktIDIzICogKDIqMyk)

## More Info

### Author

Meng Li
