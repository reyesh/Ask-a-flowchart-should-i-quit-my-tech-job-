#Ask a flowchart: Should I quit my tech job?
![Ask a flowchart: Should I quit my tech job?](/README-img/main.png)
Simple scablable web app, an interactive flowchart that answers the question **"Should I quit my job?"**

This project uses HTML, CSS, JavaScript, JSON, and Bootstrap. The current version has been refactor to separate the *Model*, *View* and *Controller/ViewModel* ( MV* ). *Controller/ViewModel* is called *Octopus* in my code. No organization JS library was used in this code, just plain vanilla JavaScript.

[Live production version!](http://reye.sh/f1)

##How to create your own flowchart?

### Understanding the flowchart and the different types of questions and responses

1. Ask a question wanting a yes & no response
![image showing yes and no buttons](/README-img/btn-yesno.png)

2. Some questions require responses to choose from. It could be more or just one.
![](/README-img/btn-responses.png)

3. Some times you want to give your user a statement after they choosen a response, before giving the final verdict.
![](/README-img/btn-verdict.png)

4. When the final anwser is given a reset button is needed to reset the flowchart and restart to the beginning.
![](/README-img/btn-reset.png)

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

#### Questions being asked (`q`)
Required variables for object: 
  * `id`: this id must start with q follow by a number.
  * `text`: Question or statement you want user to see.
  * `type`: Three different types
    * type 1: A question needing yes or no buttons
    * type 2: A question needing a response
    * type 3: verdict button require to get to end of the flowchart
#### 

1. b
2. b
```javascript
  q: [
       {
          id: "q0",
          text: "Are you out to have fun, or are you one of those serious mutant-creature builders?",
          type: 2,
          opt1: "r0",
          opt2: "r1"
        }
      ],

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
    ]
```    
3.
4.
