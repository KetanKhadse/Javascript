window.addEventListener('keyup',(e)=>{
document.querySelector("#insert").innerHTML = 
`
<div class="color">
<table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===" "?"Space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>

` 
});


