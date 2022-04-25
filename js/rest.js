async function fetchItems() {
    if(!document.getElementById('txtApi').value) {
      alert("Debe ingresar la URL");
      return;
    }
    let url = document.getElementById('txtApi').value;
    let params = {}
    if(!document.getElementById('txtFilterCode').value && document.getElementById('txtFilterVal').value  || !document.getElementById('txtFilterVal').value && document.getElementById('txtFilterCode').value) {
      alert("Debe ingresar tanto la clave como el valor de busqueda");
      return;
    }
    if(document.getElementById('txtFilterCode').value && document.getElementById('txtFilterVal').value) {
      params.code = document.getElementById('txtFilterCode').value;
      params.val = document.getElementById('txtFilterVal').value
    }
    let res = await fetch(url);
    let items = await res.json();
    if(params) {
      items = items.filter(shoe => shoe[params.code] === params.val);
    }
    console.log('items:', items)
    document.getElementById('json-container').innerHTML = JSON.stringify(items, null, 2);
}
