# Simple scablable flowchart web app
These project evolved from a spaghetti code monstrosity web app, to a simple scabable web app ( MV* ) that can be easily customize to answer any question in a flowchart manner.

This project uses HTML, CSS, JavaScript, JSON, and Bootstrap. The current version has been refactor to separate the *Model*, *View* and *Controller/ViewModel* ( MV* ). *Controller/ViewModel* is called *Octopus* in my code. No organization JS library was used in this code, just plain vanilla JavaScript.

<img alt="Ask a flowchart: Should I quit my tech job?" src="/README-img/main.png" width="300">
<img alt="" src="" width="300">

In the first version of my web app we try to answer the question: **"Should I quit my job?"**

[Live production version!](http://reye.sh/f1)

##How to create your own flowchart?

### Understanding the flowchart and the different types of questions and responses

1. Ask a question wanting a yes & no response
<img alt="image showing yes and no buttons" src="/README-img/btn-yesno.png" width="500">

2. Some questions require responses to choose from. It could be more or just one.
<img alt="" src="/README-img/btn-responses.png" width="500">

3. Some times you want to give your user a statement after they choosen a response, before giving the final verdict.
<img alt="" src="/README-img/btn-verdict.png" width="500">

4. When the final anwser is given a reset button is needed to reset the flowchart and restart to the beginning.
<img alt="" src="/README-img/btn-reset.png" width="500">

### The model structure
```javascript
var flowChart = {
  questionTitle: "What Should I Use the Crispr Gene-editing Tool to Build?",
  currentState: "",

  q: [
   {
      id: "q0",
      text: "Are you out to have fun, or are you one of those serious mutant-creature builders?",
      type: 2,
      opt1: "r0",
      opt2: "r1"
    },
  r: [
      {
        id: "r0",
        text: "Fun!",
        opt1: "q1"
      },
      {
        id: "r1",
        text: "Oh, I'm serious",
        opt1: "q2"
      }
    ],
  v: [
      {
        id: "v0",
        text: "Monkeypotamus"
      }        
    ]  
```
The model can be broken into three sections:
  * Questions being asked (`q`)
  * Responses to those questions (`r`)
  * Final verdict (`v`)

#### Questions/Statments being asked (`q`)
Required variables for `q` object: 
  * `id`: this id must start with q followed by a number.
  * `text`: Question or statement you want user to see.
  * `type`: Three different types
    * type 1: A question needing yes or no buttons
    * type 2: A question needing a response
    * type 3: verdict button require to get to end of the flowchart
  * `opt[n]`: For type 1 you must provide two `opt[n]`'s named as follow: `opt1``opt2` The `opt[n]` contains the next question (`q` object's id) or response (`r` object's id) or verdict (`v` object's id). For type 2 you must only provide `r` object's ids, the `text` of the `r` object's will become the name of the buttons. Type 3 only one is needed `opt1` and must contain a `v` object's id.
  
#### Reponses to questions (`r`)
Required variables for `r` object:
  * `id`: this id must start with r followed by a number.
  * `text`: the response you want user to see. These become the buttons questions/statements being asked.
  * `opt1`: Can lead to another question/statement `q` or to the final verdict `v`.

#### Final Verdict (`v`)
Required variables for `v` object:
  * `id`: this id must start with v followed by a number.
  * `text`: the final verdict to the question being ask.

### Example: second flowchart web app
[Ask a flowchart: What Should I Use the Crispr Gene-editing Tool to Build?](http://reye.sh/Ask-a-flowchart-What-Should-I-Use-the-Crispr-Gene-editing-Tool-to-Build-/)

[Github repository](https://github.com/reyesh/Ask-a-flowchart-What-Should-I-Use-the-Crispr-Gene-editing-Tool-to-Build-)
