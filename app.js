const express = require("express")
const {collection,collection1} = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", cors(), (req, res) => {
})
let loginUser;
app.post("/", async (req, res) => {
    const {username, password } = req.body

    try {
        const check = await collection.findOne({ username: username })

        if (check) {
            if(check['password']===password){
                res.json("exist")
            }
            else{
                res.json("passwordnotexist")
            }
            
        } else {
            res.json("notexist")
        }
        loginUser=username;
    } catch (e) {
        res.json("notexist")
    }
})

app.post("/signup", async (req, res) => {
    const { username, password } = req.body

    const data = {
        username: username,
        password: password
    }

    try {
        const check = await collection.findOne({ username: username })

        if (check) {
            res.json("exist")
        } else {
            res.json("notexist")
            await collection.insertMany([data])
        }
    } catch (e) {       
        res.json("notexist")
    }
})

app.post("/feedback", async (req, res) => {
  const { dept ,sub,facultyName, explanation, clarifying, usage, interaction,username} = req.body;
console.log("dept",dept ,sub,facultyName, explanation, clarifying, usage, interaction,username)


     try {
      await collection1.create({ dept,sub,facultyName,explanation, clarifying, usage, interaction,username });
      res.json("Feedback submitted successfully");
    } catch (e) {
      console.error(e);
      res.status(500).json("Failed to submit feedback");
    }
})



// Submit Feedback
// app.post("/feedback", async (req, res) => {
//     const { dept } = req.body;
//   console.log("dept")
//     // try {
//     //   await collection1.create({ dept });
//     //   res.json("Feedback submitted successfully");
//     // } catch (e) {
//     //   console.error(e);
//     //   res.status(500).json("Failed to submit feedback");
//     // }
//   });
  
  // Retrieve Feedback
//   app.post("/getfeedback", async (req, res) => {
//     const {feedId} = req.body;
//     try {
//       const feedback = await collection1.find({_id:feedId});
//      return res.json(feedback);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json("Failed to retrieve feedback");
//     }
//   });


// //to retrive all the data
// app.get("/submittedfeedback", async (req, res) => {
//     try {
//         const feedback = await collection1.find();
//         return res.json(feedback);
//     } catch (e) {
//         console.error(e);
//         res.status(500).json("Failed to retrieve feedback");
//     }
// });



//   app.post("/submittedfeedback", async (req, res) => {
//     const {feedId} = req.body;
//     try {
//       const feedback = await collection1.find({_id:feedId});
//      return res.json(feedback);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json("Failed to retrieve feedback");
//     }
//   });



//to retrive the data with the hep of username
app.get("/submittedfeedback", async (req, res) => {

    try {
        const feedback = await collection1.find({ username: loginUser });
    
        return res.json(feedback);
    } catch (e) {
        console.error(e);
        res.status(500).json("Failed to retrieve feedback");
    }
});



// app.get("/submittedfeedback", async (req, res) => {
//     const { username } = req.body;
//     try {
//         const feedback = await collection1.find({ username: username });
//         return res.json(feedback);
//     } catch (e) {
//         console.error(e);
//         res.status(500).json("Failed to retrieve feedback");
//     }
// });

  


app.listen(8000, () => {
    console.log("port connected");
})




// const express = require("express")
// const { collection, facultycollection } = require("./mongo")
// const cors = require("cors")
// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())

// app.get("/", cors(), (req, res) => {
// })

// app.post("/", async (req, res) => {
//     const { username, password } = req.body

//     try {
//         const check = await collection.findOne({ username: username })

//         if (check) {
//             if (check['password'] === password) {
//                 res.json("exist")
//             } else {
//                 res.json("passwordnotexist")
//             }

//         } else {
//             res.json("notexist")
//         }
//     } catch (e) {
//         res.json("notexist")
//     }
// })

// app.post("/signup", async (req, res) => {
//     const { username, password } = req.body

//     const data = {
//         username: username,
//         password: password
//     }

//     try {
//         const check = await collection.findOne({ username: username })

//         if (check) {
//             res.json("exist")
//         } else {
//             res.json("notexist")
//             await collection.insertMany([data])
//         }
//     } catch (e) {
//         res.json("notexist")
//     }
// })

// app.post("/feedback", async (req, res) => {
//     const { selectedCar, selectedYear, username } = req.body;

//     const data = {
//         selectedCar: selectedCar,
//         selectedYear: selectedYear,
//         username: username
//     };

//     try {
//         await facultycollection.insertMany([data]);
//         res.json("success");
//     } catch (e) {
//         console.error(e);
//         res.status(500).json("error");
//     }
// });

// app.get("/feedback", async (req, res) => {
//     try {
//         const data = await facultycollection.find();
//         res.json(data);
//     } catch (e) {
//         console.error(e);
//         res.status(500).json("error");
//     }
// });

// app.listen(8000, () => {
//     console.log("port connected");
// })
