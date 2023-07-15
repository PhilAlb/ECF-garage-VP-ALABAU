fetch("url", {
  method: "POST",
  body: JSON.stringify({
      name:"",
      contact:"",
      other:""
  }),
  headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
}).then((res) => {
  console.log(res);
})