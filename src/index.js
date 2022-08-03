import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

document.getElementById("app").innerHTML = `
<div class="container h-100">

  <div class="row h-100 justify-content-center align-items-center">
  <form class="">
  <pre>Form centered inside a 600 height container</pre>  
      <div class="">
        <label for="formGroupExampleInput">Example label</label>
        <input type="text" class="" id="formGroupExampleInput" placeholder="Example input">
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Another label</label>
        <input type="text" class="" id="formGroupExampleInput2" placeholder="Another input">
      </div>
    </form>   
  </div>  
</div>
`;
