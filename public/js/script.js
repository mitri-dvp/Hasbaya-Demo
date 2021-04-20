// DOM elements
let lang = 'en'
const forms = {
  clientes: `
  <form class="form">
  <h2 class="text-center title">${dictionary.forms.clients.title[lang]}</h2>
  <hr>
  <div class="fields">
    <div>
      <label for="cedula">${dictionary.forms.clients.id.label[lang]}:</label>
      <input type="text" placeholder="${dictionary.forms.clients.id.placeholder[lang]}" class="form-control" name="cedula" id="cedula">
    </div>
    <div>
      <label for="nombre">${dictionary.forms.clients.name.label[lang]}:</label>
      <input type="text" placeholder="${dictionary.forms.clients.name.placeholder[lang]}" class="form-control" name="nombre" id="nombre">
    </div>
    <div>
      <label for="telefono">${dictionary.forms.clients.phone.label[lang]}:</label>
      <input type="text" placeholder="${dictionary.forms.clients.phone.placeholder[lang]}" class="form-control" name="telefono" id="telefono">
    </div>
    <div>
      <label for="email">${dictionary.forms.clients.email.label[lang]}:</label>
      <input type="text" placeholder="${dictionary.forms.clients.email.placeholder[lang]}" class="form-control" name="email" id="email">
    </div>
    <div class="span">
      <label for="direccion">${dictionary.forms.clients.address.label[lang]}:</label>
      <input type="text" placeholder="${dictionary.forms.clients.address.placeholder[lang]}" class="form-control" name="direccion" id="direccion">
    </div>
  </div>
  <hr>
  <input type="submit" class="btn btn-dark text-center w-75 mx-auto" value="${dictionary.create[lang]}">
</form>
  `,
  productos: `
  <form class="form">
    <h2 class="text-center title">${dictionary.forms.products.title[lang]}</h2>
    <hr>
    <div class="fields">
      <div>
        <label for="titulo">${dictionary.forms.products.name.label[lang]}:</label>
        <input type="text" placeholder="${dictionary.forms.products.name.placeholder[lang]}" class="form-control" name="titulo" id="titulo">
      </div>
      <div class="custom-subgrid">
        <div>
          <label for="precio">${dictionary.forms.products.price.label[lang]}:</label>
          <input type="text" placeholder="${dictionary.forms.products.price.placeholder[lang]}" class="form-control" name="precio" id="precio">
        </div>
        <div>
          <label for="cantidad">${dictionary.forms.products.quantity.label[lang]}:</label>
          <input type="text" placeholder="${dictionary.forms.products.quantity.placeholder[lang]}" class="form-control" name="cantidad" id="cantidad">
        </div>
      </div>
      <div>
      <label for="descripcion">${dictionary.forms.products.description.label[lang]}:</label>
      <textarea class="form-control textarea-custom" name="descripcion" id="descripcion" cols="30"
      rows="6"></textarea>
      </div>
      <div>
        <label for="imagen">
          <span class="image-title">${dictionary.forms.products.image.label[lang]}:</span>
          <span class="image-span form-control">${dictionary.forms.products.image.placeholder[lang]}</span>
        </label>
        <input class="input-file" type="file" name="imagen" id="imagen" />
        <div class="form-img"></div>
      </div>
    </div>
    <hr>
    <input type="submit" class="btn btn-dark text-center w-75 mx-auto" value="${dictionary.create[lang]}">
  </form>
  `,
  pedidos: `
  <form class="form">
  <section class="custom-section section-1">
      <h2 class="text-center title">${dictionary.forms.orders.title[lang]}</h2>
      <hr>
      <div class="cliente-fields">
        <div>
          <label for="cliente_cedula">${dictionary.forms.clients.id.label[lang]}:</label>
          <input type="text" class="form-control" name="cliente_cedula" id="cliente_cedula" disabled="true">
        </div>
        <div>
          <label for="cliente_nombre">${dictionary.forms.clients.name.label[lang]}:</label>
          <input type="text" class="form-control" name="cliente_nombre" id="cliente_nombre" disabled="true">
        </div>
        <div>
          <label for="cliente_telefono">${dictionary.forms.clients.phone.label[lang]}:</label>
          <input type="text" class="form-control" name="cliente_telefono" id="cliente_telefono" disabled="true">
        </div>
        <div class="span">
          <label for="cliente_direccion">${dictionary.forms.clients.address.label[lang]}:</label>
          <input type="text" class="form-control" name="cliente_direccion" id="cliente_direccion" disabled="true">
        </div>
        <div class="directorio-wrapper">
          <input type="button" value='${dictionary.forms.orders.directory[lang]}' class="form-control btn-directorio" name="directorio"
            id="directorio">
        </div>
      </div>
      <hr>
      <input type="button" class="btn btn-dark d-block text-center w-25 btn-next mx-auto" value="${dictionary.forms.orders.next[lang]}">
    </section>

    <section class="custom-section section-2 hide">
      <h2 class="text-center title">${dictionary.forms.orders.title[lang]}</h2>
      <hr>
      <div class="pedidos-fields">
        <div>
          <label for="fecha">${dictionary.forms.orders.date.label[lang]}:</label>
          <input type="date" placeholder="${dictionary.forms.orders.date.placeholder[lang]}" class="form-control" name="fecha" id="fecha">
        </div>
        <div>
          <label for="cambio">${dictionary.forms.orders.rate.label[lang]}:</label>
          <input type="text" placeholder="${dictionary.forms.orders.rate.placeholder[lang]}" class="form-control" name="cambio" id="cambio">
        </div>
        <div>
          <label for="codigo">${dictionary.forms.orders.order_number.label[lang]}:</label>
          <input type="text" placeholder="" class="form-control" name="codigo" id="codigo" disabled>
        </div>
      </div>
      <div class="productos-fields">
        <input type="button" class="form-control text-center w-50 mx-auto btn-productos" value="${dictionary.forms.orders.select_products[lang]}">

        <!-- Inserted with js -->
        <div class="results">
        </div>
      </div>
      <hr>
      <div class="controls">
        <input type="button" class="btn btn-dark text-center ml-auto w-50 btn-back" value="${dictionary.forms.orders.back[lang]}">
        <input type="button" class="btn btn-dark text-center w-50 btn-next-2" value="${dictionary.forms.orders.finish[lang]}">
      </div>
    </section>
    
    <secion id="3" class="custom-section section-3 hide">
    <h2 class="text-center title">${dictionary.forms.orders.title[lang]}</h2>
    <hr>
    <div class="output">

    </div>
    
    <div class="controls">
      <input type="button" class="btn btn-dark text-center ml-auto w-50 btn-back-2" value="${dictionary.forms.orders.back[lang]}">
      <input type="submit" class="btn btn-dark text-center w-50 btn-end" value="${dictionary.forms.orders.save[lang]}">
    </div>
    </secion>
  </form>
  `
}
const search = `
  <form class="form">
  <h2 class="text-center title">${dictionary.forms.clients.title[lang]}</h2>
  <hr>
  <div>
    <input type="text" placeholder="${dictionary.search[lang]}" class="form-control" name="search" id="search" value=".">
  </div>
  <div class="results">
  </div>
  <hr>
</form>
`

// Elements
const resourcesList = document.querySelector('.resources');
const crudButtonsWrapper = document.querySelector('.crud-btns')
const crudButtons = document.querySelectorAll('.crud-btns div')
const viewport = document.querySelector('.viewport')
const mainBar = document.querySelector('.main-bar')
const langDOM = document.querySelector('.lang')
let selectedResource = resourcesList.children[0].id;

resourcesList.children[0].textContent = dictionary.forms.clients.title[lang]
resourcesList.children[1].textContent = dictionary.forms.products.title[lang]
resourcesList.children[2].textContent = dictionary.forms.orders.title[lang]

langDOM.children[0].addEventListener('click', () => {lang = 'es'})
langDOM.children[1].addEventListener('click', () => {lang = 'en'})

// Listeners
resourcesList.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', selectItem)
})

crudButtons.forEach(btn => {
  btn.addEventListener('click', (e) => selectBtn(btn.id))
})
// Functions
function selectItem() {
  if(resourcesList.querySelector('.selected')) resourcesList.querySelector('.selected').classList.remove('selected') 
  this.classList.add('selected')
  

  
  // Select resource
  selectedResource = this.id
  
  if(selectedResource === 'pedidos') {
    crudButtons[2].classList.add('d-none')
    crudButtons[3].classList.add('d-none')
  } else {
    crudButtons[2].classList.remove('d-none')
    crudButtons[3].classList.remove('d-none')

  }
  // Animation Initialization
  crudButtonsWrapper.classList.remove('d-none')
  crudButtonsWrapper.classList.add('show')
  viewport.classList.add('hide')
}

function selectBtn(action = 'c') {
  let form;
  let data;
  switch (selectedResource) {

  /////////////////////////////
  ///// @CONTROLS CLIENTES ////
  /////////////////////////////
  case 'clientes':
    switch (action) {
      case 'c':
        toggleAnimation()
        viewport.innerHTML = forms.clientes
        form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
          e.preventDefault()
          data = new FormData(form)
          submitCliente(form, data)}
        );
        break;
      case 'r':
        toggleAnimation()
        viewport.innerHTML = search;
        viewport.querySelector('.results').innerHTML = `
        <table class="table table-bordered mx-auto">
          <thead class="thead-dark">
            <tr>
              <th>${dictionary.forms.clients.id.label[lang]}</th>
              <th>${dictionary.forms.clients.name.label[lang]}</th>
              <th>${dictionary.forms.clients.phone.label[lang]}</th>
            </tr>
          </thead>
          <tbody class="table-body--js">
          </tbody>
        </table>
        `
        form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
          e.preventDefault()
        }
        );
        loadReadClientes()  
        break;
      case 'u':
        showModal(30, 7, 'searchCliente', 1)
        break;
      case 'd':
        showModal(30, 7, 'searchCliente', 0)
        break;
    
      default:
        break;
    }
  break;

  /////////////////////////////
  ///// @CONTROLS PRODUCTOS ///
  /////////////////////////////
  case 'productos':
    switch (action) {
      case 'c':
        toggleAnimation()
        viewport.innerHTML = forms.productos;
        form = document.querySelector('form');  
        imagePreview();
        form.addEventListener('submit', (e) => {
          e.preventDefault()
          data = new FormData(form)
          submitProducto(form, data)
        });
        break;
      case 'r':
        toggleAnimation()
        viewport.innerHTML = search;
        viewport.querySelector('.title').innerHTML = dictionary.forms.products.title[lang]
        viewport.querySelector('.results').innerHTML = `
        <table class="table table-bordered mx-auto">
          <thead class="thead-dark">
            <tr>
              <th>${dictionary.forms.products.name.label[lang]}</th>
              <th>${dictionary.forms.products.description.label[lang]}</th>
              <th>${dictionary.forms.products.quantity.label[lang]}</th>
              <th>${dictionary.forms.products.price.label[lang]}</th>
            </tr>
          </thead>
          <tbody class="table-body--js">
          </tbody>
        </table>
        `
        form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
          e.preventDefault()
        }
        );
        loadReadProductos() 
        break;
      case 'u':
        showModal(30, 7, 'searchProducto', 1)
        break;
      case 'd':
        showModal(30, 7, 'searchProducto', 0)
        break;
    
      default:
        break;
    }

  break;

  /////////////////////////////
  ///// @CONTROLS PEDIDOS /////
  /////////////////////////////
  case 'pedidos':
    switch (action) {
      case 'c':
        toggleAnimation()
        viewport.innerHTML = forms.pedidos;
        form = document.querySelector('form');
        data = new FormData(form);
        loadPedidosC()
        form.addEventListener('submit', (e) => {
          e.preventDefault()
          data = new FormData(form)
        });
        break;
      case 'r':
        toggleAnimation()
        viewport.innerHTML = search;
        viewport.querySelector('.title').innerHTML = dictionary.forms.orders.title[lang]
        viewport.querySelector('.results').innerHTML = `
        <table class="table table-bordered mx-auto">
          <thead class="thead-dark">
            <tr>
              <th>${dictionary.forms.orders.code[lang]}</th>
              <th>${dictionary.forms.orders.client_name[lang]}</th>
              <th>${dictionary.forms.orders.client_phone[lang]}</th>
            </tr>
          </thead>
          <tbody class="table-body--js">
          </tbody>
        </table>
        `
        form = document.querySelector('form');
        data = new FormData(form);
        form.addEventListener('submit', (e) => {
          e.preventDefault()
        }
        );
        loadReadPedidos() 
        break;
      case 'u':
        form.addEventListener('submit', (e) => {
          e.preventDefault()
          data = new FormData(form)
        });
        break;
      case 'd':
        form.addEventListener('submit', (e) => {
          e.preventDefault()
          data = new FormData(form)
        });
        break;
    
      default:
        break;
    }

  break;

  default:
  break;
  }

}

////////////////////////////
///// @ACTIONS CLIENTES ////
////////////////////////////
async function submitCliente(form, data) {
  
  const req = await fetch('/api/clientes',{
    method: 'POST',
    body: data
  })
  const res = await req.json()
  if(res.success) {
    printMessage(dictionary.messages[res.msg][lang], 'success', res.id)
    for (let i = 0; i < form.length - 1; i++) {
      form[i].value = '';
    }
  } else {
    if(res.error === 'Campo duplicado') {
      printMessage(dictionary.messages.duplicate.clients[lang], 'danger')
    } else {
      printMessage(dictionary.messages.empty[lang], 'danger')
    }
  }
}

function loadReadClientes() {
  const tableBody = document.querySelector('.table-body--js')
  const input = document.querySelector('#search')
  input.focus()

  input.addEventListener('change', findClientes)
  findClientes()
  async function findClientes() {
    tableBody.innerHTML = '';
    let query = 'nombre';
    if(isFinite(input.value)) {
      input.value.startsWith(0) ? query = 'telefono' : query = 'cedula'
    }
    const req = await fetch(`/api/clientes?${query}=${input.value}`)
    const res = await req.json()
    input.value = '';

    res.body.forEach(result => {
      tableBody.innerHTML += `
      <tr>
        <td><a id="${result._id}" href="#">${result.cedula}</a></td>
        <td>${result.nombre}</td>
        <td>${result.telefono}</td>
      </tr>
      `
    })
    const links = tableBody.querySelectorAll('a')
    links.forEach(link => {
      link.addEventListener('click', select)
    })

    async function select() {
      const req = await fetch(`/api/clientes/${this.id}`)
      const res = await req.json()
      showModal(40, 30, 'showSelection', res.body)
    }
  }
}

async function loadUpdateClientes(cliente) {
  toggleAnimation()
  viewport.innerHTML = forms.clientes
  const form = document.querySelector('form');
  const clienteArray = Object.values(cliente)
  for (let i = 0; i < form.length - 1; i++) {
    form[i].value = clienteArray[i + 1];
  }
  form[0].disabled = 'true'
  form[form.length - 1].value = dictionary.update[lang]
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    data = new FormData(form)
    data.append('id', clienteArray[0])
    const req = await fetch('/api/clientes',{
      method: 'PUT',
      body: data
    })
    const res = await req.json()
    if(res.success) {
      printMessage(dictionary.messages[res.msg][lang], 'success', res.id)
    } else {
      printMessage(dictionary.messages.error[lang], 'danger')
    }
  });
}

async function loadDeleteClientes(cliente) {
  toggleAnimation()
  viewport.innerHTML = forms.clientes
  const form = document.querySelector('form');
  const clienteArray = Object.values(cliente)
  for (let i = 0; i < form.length - 1; i++) {
    form[i].placeholder = ''
    form[i].disabled = 'true'
    form[i].value = clienteArray[i + 1];
  }
  form[form.length - 1].value = dictionary.delete[lang]
  form[form.length - 1].className = 'btn btn-danger text-center w-75 mx-auto'
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    data = new FormData(form)
    data.append('id', clienteArray[0])
    const req = await fetch('/api/clientes',{
      method: 'DELETE',
      body: data
    })
    const res = await req.json()
    if(res.success) {
      printMessage(dictionary.messages[res.msg][lang], 'success', res.id)
      for (let i = 0; i < form.length - 1; i++) {
        form[i].value = '';
      }
    } else {
      printMessage(dictionary.messages.error[lang], 'danger')
    }
  });
}

////////////////////////////
///// @ACTIONS PRODUCTOS ///
////////////////////////////
async function submitProducto(form, data) {
  const req = await fetch('/api/productos',{
    method: 'POST',
    body: data
  })
  const res = await req.json()
  if(res.success) {
    printMessage(dictionary.messages[res.msg][lang], 'success', res.id)
    for (let i = 0; i < form.length - 1; i++) {
      form[i].value = '';
    }
  } else {
    if(res.error === 'Campo duplicado') {
      printMessage(dictionary.messages.duplicate.products[lang], 'danger')
    } else {
      printMessage(dictionary.messages.empty[lang], 'danger')
    }
  }
}

function loadReadProductos() {
  const tableBody = document.querySelector('.table-body--js')
  const input = document.querySelector('#search')
  input.focus()

  input.addEventListener('change', findProductos)
  findProductos()
  async function findProductos() {
    tableBody.innerHTML = '';
    const req = await fetch(`/api/productos?${'titulo'}=${input.value}`)
    const res = await req.json()
    input.value = '';

    res.body.forEach(result => {
      tableBody.innerHTML += `
      <tr>
        <td><a id="${result._id}" href="#">${result.titulo}</a></td>
        <td>${result.descripcion}</td>
        <td class="text-center">${result.cantidad}</td>
        <td class="text-center"><span class="currency">$</span>${result.precio.toFixed(2)}</td>
      </tr>
      `
    })
    const links = tableBody.querySelectorAll('a')
    links.forEach(link => {
      link.addEventListener('click', select)
    })

    async function select() {
      const req = await fetch(`/api/productos/${this.id}`)
      const res = await req.json()
      showModal(40, 30, 'showSelection', res.body)
    }
  }
}

async function loadUpdateProductos(producto) {
  toggleAnimation()
  viewport.innerHTML = forms.productos;
  imagePreview()
  const form = document.querySelector('form');
  const productoArray = Object.values(producto)
  for (let i = 0; i < form.length - 2; i++) {
    form[i].value = productoArray[i + 2];
  }
  form[form.length - 1].value = dictionary.update[lang]
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    data = new FormData(form)
    data.append('id', producto._id)
    const req = await fetch('/api/productos',{
      method: 'PUT',
      body: data
    })
    const res = await req.json()
    if(res.success) {
      printMessage(dictionary.messages[res.msg][lang], 'success', res.id)
    } else {
      printMessage(dictionary.messages.error[lang], 'danger')
    }
  });
}

async function loadDeleteProductos(producto) {
  toggleAnimation()
  viewport.innerHTML = forms.productos;
  const form = document.querySelector('form');
  const productoArray = Object.values(producto)
  for (let i = 0; i < form.length - 2; i++) {
    form[i].disabled = true;
    form[i].value = productoArray[i + 2];
  }
  form[form.length - 2].disabled = true;
  form[form.length - 1].value = dictionary.delete[lang]
  form[form.length - 1].className = 'btn btn-danger text-center w-75 mx-auto'
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    data = new FormData(form)
    data.append('id', producto._id)
    const req = await fetch('/api/productos',{
      method: 'DELETE',
      body: data
    })
    const res = await req.json()
    if(res.success) {
      printMessage(dictionary.messages[res.msg][lang], 'success', res.id)
      for (let i = 0; i < form.length - 1; i++) {
        form[i].value = '';
      }
    } else {
      printMessage(dictionary.messages.error[lang], 'danger')
    }
  });
}

////////////////////////////
///// @ACTIONS PEDIDOS /////
////////////////////////////
function loadPedidosC() {
  // Directorio, Seleccion de Productos, Insertar código
  const btnDirectorio = document.querySelector('.btn-directorio')
  const btnProductos = document.querySelector('.btn-productos')
  const fechaInput = document.querySelector('#fecha')
  const codigoInput = document.querySelector('#codigo')

  btnDirectorio.addEventListener('click', () => showModal(40, 30, 'pedidosDirectorio'))
  btnProductos.addEventListener('click', () => showModal(40, 30, 'pedidosProductos'))
  fechaInput.addEventListener('change', insertCode)

  // Change Sections
  const sections = document.querySelectorAll('.custom-section')
  const btnNext = document.querySelector('.btn-next')
  const btnBack = document.querySelector('.btn-back')
  const btnFinalizar = document.querySelector('.btn-next-2')
  const btnBack2 = document.querySelector('.btn-back-2')
  
  btnNext.addEventListener('click', () => changeSection(2))
  btnBack.addEventListener('click', () => changeSection(1))
  btnFinalizar.addEventListener('click', () => getDatosPedido())
  btnBack2.addEventListener('click', () => changeSection(2))

  function changeSection(n) {
    sections.forEach(sections => sections.classList.add('hide'))
    sections[n-1].classList.remove('hide')
  }

  // Insert Code
  async function insertCode() {
    const date = new Date(fechaInput.value+"T00:00:00").toLocaleDateString(lang, {month:'short'}).slice(0,3).toUpperCase()
    let code;


    const req = await fetch(`/api/pedidos?codigo=${date}`)
    const res = await req.json()
    
    if(res.body.length) {
      code = date + (res.body.length + 1).toString().padStart(3,0)
    } else {
      code = date + "001"
    }
    codigoInput.value = code;

  }

  function getDatosPedido() {
    const form = document.querySelector('form')

    const disabledInputs = [];
    for (let i = 0; i < form.length; i++) {
      if(form[i].disabled === true) disabledInputs.push(form[i]);
    }
    disabledInputs.forEach(input => input.disabled = false)
    const formData = new FormData(form)
    disabledInputs.forEach(input => input.disabled = true)


    const clienteId = document.querySelector('.btn-directorio').id
    formData.append('cliente_id', clienteId)

    const listaProductos = document.querySelector('.form-table-body');

    const lista = [];
    for (let i = 0; i < listaProductos.children.length - 1; i++) {
      const tr = listaProductos.children[i];
      const tempRow = [];
      [...tr.children].forEach((td,i) => {
        if(!i) tempRow.push(td.id)
        if(td.textContent==="") {
          tempRow.push(td.lastElementChild.value)
          return
        }
        tempRow.push(td.textContent)
      })
      lista.push(tempRow)
      
    }
    formData.append('lista_productos', JSON.stringify(lista))
    
    const total  = document.querySelector('.precio-total').textContent
    formData.append('total', total)

    
    const obj = {}
    formData.forEach((value,key)=>{obj[key] = value})

    const output = document.querySelector('.output');

    // Create function that takes an object and fills the data.
    const html = printPedido(obj)

    output.innerHTML = html;
    changeSection(3)

    const btnEnd = document.querySelector('.btn-end')
    btnEnd.addEventListener('click', () => {
      submitPedido(formData, output)
    })
  }
}

async function submitPedido(formData, output) {
  const req = await fetch('/api/pedidos',{
    method: 'POST',
    body: formData
  })
  const res = await req.json()
  if(res.success) {
    printMessage(dictionary.messages[res.msg][lang], 'success', res.id)
    print(output)
  } else {
    printMessage(dictionary.messages[res.error][lang], 'danger')
  }
}

function loadReadPedidos() {
  const tableBody = document.querySelector('.table-body--js')
  const input = document.querySelector('#search')
  input.focus()

  input.addEventListener('change', findPedidos)
  findPedidos()
  async function findPedidos() {
    tableBody.innerHTML = '';
    const req = await fetch(`/api/pedidos?${'codigo'}=${input.value}`)
    const res = await req.json()
    input.value = '';

    res.body.forEach(result => {
      tableBody.innerHTML += `
      <tr>
        <td><a id="${result._id}" href="#">${result.codigo}</a></td>
        <td>${result.cliente_nombre}</td>
        <td>${result.cliente_telefono}</td>
      </tr>
      `
    })
    const links = tableBody.querySelectorAll('a')
    links.forEach(link => {
      link.addEventListener('click', select)
    })

    async function select() {
      const req = await fetch(`/api/pedidos/${this.id}`)
      const res = await req.json()
      showModal(40, 30, 'printPedido', res.body)
    }
  }
}

async function loadDeletePedidos(pedido) {
  toggleAnimation()
  viewport.innerHTML = `
  <h2 class="text-center title">Orders</h2>
  <hr>
  <div class="output"></div>
  <input type="submit" class="btn btn-danger text-center w-100" value="${dictionary.delete[lang]}">
  `;
  const output = document.querySelector('.output');
  const html = printPedido(pedido)
  output.innerHTML = html;


  document.querySelector('.btn-danger').addEventListener('click', async () => {
    const req = await fetch(`/api/pedidos/${pedido._id}`,{
      method: 'DELETE'
    })
    const res = await req.json()
    if(res.success) {
      printMessage(dictionary.messages[res.msg][lang], 'success', res.id)
      output.innerHTML = '';
    } else {
      printMessage(dictionary.messages.error[lang], 'danger')
    }
  })
}

function updateValues() {
  // Actualizar el valor total del producto
  const precioProductoTotalDOM = this.parentElement.nextElementSibling.lastElementChild
  const precioA = +precioProductoTotalDOM.textContent
  const precioU = +this.parentElement.previousElementSibling.lastElementChild.textContent
  const cantidad = this.value
  const total = (precioU * cantidad).toFixed(2)
  precioProductoTotalDOM.textContent = total

  const diff = total - precioA

  // Actualizar el valor total
  const precioTotalDOM = this.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild;
  precioTotalDOM.textContent = (+precioTotalDOM.textContent + diff).toFixed(2)
}

function showModal(x, y, payload, data) {
  const modalWrapper = document.createElement('div');
  const modal = document.createElement('div');
  const exitBtn = document.createElement('button');
  modalWrapper.classList.add('modal-wrapper');
  modal.classList.add('custom-modal');
  modal.style.width = `${x}rem`;
  exitBtn.className = 'exit-btn btn btn-danger';
  // modal.appendChild(exitBtn);
  mainBar.appendChild(modal);
  document.body.appendChild(modalWrapper);
  
  exitBtn.addEventListener('click', removeModal)
  modalWrapper.addEventListener('click', removeModal)
  window.addEventListener('keydown', removeModalEsc)

  function removeModal() {
    modalWrapper.remove()
    modal.remove()
  }
  function removeModalEsc(e) {
    if(e.keyCode === 27) {
      modalWrapper.remove()
      modal.remove()
    }
  }

  let input;
  switch (payload) {

    case 'pedidosDirectorio':
      modal.innerHTML += `
      <div class="results">
        <table class="table table-bordered mx-auto">
          <thead class="thead-dark">
            <tr>
              <th>${dictionary.forms.clients.id.label[lang]}</th>
              <th>${dictionary.forms.clients.name.label[lang]}</th>
              <th>${dictionary.forms.clients.phone.label[lang]}</th>
            </tr>
          </thead>
          <tbody class="table-directorio--js">
          </tbody>
        </table>
      </div>
      `;
      const tbodyDirectorio = document.querySelector('.table-directorio--js')

      getAllClientes()
      async function getAllClientes() {
        const req = await fetch(`/api/clientes`)
        const res = await req.json()
        data = res.body;
        res.body.forEach(item => {
          tbodyDirectorio.innerHTML += `
          <tr>
            <td><a id="${item._id}" href="#">${item.cedula}</a></td>
            <td>${item.nombre}</td>
            <td>${item.telefono}</td>
          </tr>
          `;
        })
        const links = tbodyDirectorio.querySelectorAll('a')
        links.forEach(link => {
          link.addEventListener('click', selectCliente)
        })
      }

      async function selectCliente() {
        const req = await fetch(`/api/clientes/${this.id}`)
        const res = await req.json()
        const fields = document.querySelectorAll('.cliente-fields input')

        fields[0].value = res.body.cedula
        fields[1].value = res.body.nombre
        fields[2].value = res.body.telefono
        fields[3].value = res.body.direccion
        fields[4].id = res.body._id
        removeModal()
      }
      break;

    case 'pedidosProductos':
      modal.innerHTML += `
      <div class="results">
        <table class="table table-bordered mx-auto">
          <thead class="thead-dark">
            <tr>
              <th>${dictionary.forms.products.name.label[lang]}</th>
              <th class="table-remove">${dictionary.forms.products.description.label[lang]}</th>
              <th class="table-remove text-center">${dictionary.forms.products.quantity.label[lang]}</th>
              <th class="text-center">${dictionary.forms.products.price.label[lang]}</th>
              <th class="d-none text-center">${dictionary.forms.products.quantity.label[lang]}</th>
              <th class="d-none text-center">${dictionary.total[lang]}</th>
              <th class="table-remove"></th>
            </tr>
          </thead>
          <tbody class="table-seleccionar-productos--js">
          </tbody>
        </table>
      </div>
      `;
      let tbodyProductos = document.querySelector('.table-seleccionar-productos--js')

      getAllProductos()
      async function getAllProductos() {
        const req = await fetch(`/api/productos`)
        const res = await req.json()
        data = res.body;
        res.body.forEach(item => {
          tbodyProductos.innerHTML += `
          <tr>
            <td id="${item._id}">${item.titulo}</td>
            <td class="table-removed">${item.descripcion}</td>
            <td class="table-removed text-center">${item.cantidad}</td>
            <td class="text-center"><span class="currency">$</span><span class="precio-producto">${item.precio.toFixed(2)}</span></td>
            <td class="d-none w-1"><input class="form-control" type="number" min="1" max="${item.cantidad}" value="1"></td>
            <td class="d-none text-center"><span class="currency">$</span><span class="precio-total-producto">${item.precio.toFixed(2)}</span></td>
            <td class="table-removed"><input type="checkbox" class="form-control"></td>
          </tr>
          `;
        })
        modal.innerHTML += `
          <input type="button" class="btn btn-success text-center w-100 mt-3 btn-seleccionar-productos" value="${dictionary.select[lang]}">
        `;

        const btnSeleccionar = modal.querySelector('.btn-seleccionar-productos');
        btnSeleccionar.addEventListener('click', selectProductos)
      }

      async function selectProductos() {
        // Select tbody again
        tbodyProductos = document.querySelector('.table-seleccionar-productos--js')

        // Clear Results Div
        const productosResults = document.querySelector('.results')
        productosResults.innerHTML = '';

        // Remove Descripcion y Precio y Checkbox
        const addItems = tbodyProductos.parentNode.querySelectorAll('.d-none');
        addItems.forEach(item => item.classList.remove('d-none'))
        const removeItems = tbodyProductos.parentNode.querySelectorAll('.table-remove');
        removeItems.forEach((item,i) => {
          item.remove()
        });

        // Remove Rows Unchecked Rows
        [...tbodyProductos.children].forEach(child => {
          if(!child.lastElementChild.lastElementChild.checked) child.remove()
        })

        // Condicion si no se selecciona ningun Producto
        if(!tbodyProductos.childElementCount) {
          removeModal()
          return
        }

        // Quitar todos los elementos marcados
        const removedItems = tbodyProductos.parentNode.querySelectorAll('.table-removed');
        removedItems.forEach((item,i) => {
          item.remove()
        });

        tbodyProductos.innerHTML += `
        <tr>
          <td></td>
          <td></td>
          <td class="text-center font-weight-bold"> ${dictionary.total[lang]}</td>
          <td class="text-center"><span class="currency">$</span><span class="precio-total">0</span></td>
        </tr>
        `;
        
        let total = 0;
        const precioProductos = tbodyProductos.parentNode.querySelectorAll('.precio-producto');
        precioProductos.forEach(precio => total += +precio.textContent)
        tbodyProductos.querySelector('.precio-total').textContent = total.toFixed(2)

        tbodyProductos.querySelectorAll('input[type="number"]').forEach(input => input.addEventListener('change', updateValues))
        
        tbodyProductos.className = 'form-table-body';
        productosResults.appendChild(tbodyProductos.parentNode)
        removeModal()
      }
      break;

    case 'searchCliente':
      modal.innerHTML += `
      <h3>${dictionary.forms.clients.search_by.label[lang]}:</h3>
      <input id="search" type="text" placeholder="${dictionary.forms.clients.search_by.placeholder[lang]}" class="form-control" name="search" >
      `;
      input = document.querySelector('#search');
      input.focus()
      input.addEventListener('change', async () =>  {
        const req = await fetch(`/api/clientes?${'cedula'}=${input.value}`)
        const res = await req.json()
        
        if(res.body.length) {
          if(data) {
            loadUpdateClientes(res.body[0])
            removeModal()
          } else {
            loadDeleteClientes(res.body[0])
            removeModal()
          }
        } else {
          printMessage(dictionary.messages.no_result[lang], 'danger')
        }
      })
      break;

    case 'searchProducto':
      modal.innerHTML += `
      <h3>${dictionary.forms.products.search_by.label[lang]}:</h3>
      <input id="search" type="text" placeholder="${dictionary.forms.products.search_by.placeholder[lang]}" class="form-control" name="search">
      `;
      input = document.querySelector('#search');
      input.focus()
      input.addEventListener('change', async () =>  {
        const req = await fetch(`/api/productos?single=true&${'titulo'}=${input.value}`)
        const res = await req.json()
        if(res.body) {
          if(data) {
            loadUpdateProductos(res.body)
            removeModal()
          } else {
            loadDeleteProductos(res.body)
            removeModal()
          }
        } else {
          printMessage(dictionary.messages.no_result[lang], 'danger')
        }
      })
      break;

    case 'showSelection':
      const keys = Object.keys(data)
      const card = document.createElement('div')
      card.classList.add('item-card')
      for (let i = 1; i < keys.length - 1; i++) {
        card.innerHTML += `
        <div class="text-capitalize">${keys[i]}:</div><div class="text-dark value">${data[keys[i]]}</div>
        `;
      }
      modal.appendChild(card)
      modal.innerHTML += `
      <div class="controls">
        <input type="button" class="btn btn-success text-center ml-auto w-50" value="${dictionary.update[lang]}" id="0">
        <input type="submit" class="btn btn-dark text-center w-50" value="${dictionary.delete[lang]}" id="1">
      </div>
      `
      modal.querySelectorAll('input').forEach(btn => btn.addEventListener('click', () => {
        if(selectedResource === 'clientes'){
          if(btn.value === dictionary.update[lang]) {
            removeModal()
            toggleAnimation()
            loadUpdateClientes(data)
          } else {
            removeModal()
            toggleAnimation()
            loadDeleteClientes(data)
          }
        } else {
          if(btn.value === dictionary.update[lang]) {
            removeModal()
            toggleAnimation()
            loadUpdateProductos(data)
          } else {
            removeModal()
            toggleAnimation()
            loadDeleteProductos(data)
          }
        }
      }))
      break;

    case 'printPedido':
      const output = document.createElement('div')
      output.classList.add('output')
      const html = printPedido(data)
      output.innerHTML = html;
      modal.appendChild(output)
      modal.innerHTML += `
      <input type="submit" class="btn btn-dark text-center w-50 mx-auto" value="${dictionary.delete[lang]}" id="1">
      `
      modal.querySelectorAll('input').forEach(btn => btn.addEventListener('click', () => {
        removeModal()
        toggleAnimation()
        loadDeletePedidos(data)
      }))
      break

    default:
      break;
  }
}

function printPedido(pedido) {
  let html = `
  <div class="output-header">
    <div><span class="font-weight-bold">${dictionary.forms.orders.client_label[lang]}:&nbsp;</span>${pedido.cliente_nombre}</div>
    <div><span class="font-weight-bold">${dictionary.forms.orders.id_label[lang]}:&nbsp;</span>${pedido.cliente_cedula}</div>
    <div><span class="font-weight-bold">${dictionary.forms.clients.address.label[lang]}:&nbsp;</span>${pedido.cliente_direccion}</div>
    <div><span class="font-weight-bold">${dictionary.forms.clients.phone.label[lang]}:&nbsp;</span>${pedido.cliente_telefono}</div>
  </div>

  <div class="output-middle">
    <div>${pedido.fecha}</div>
    <div class="output-middle-span">${dictionary.forms.orders.order_label[lang]}: ${pedido.codigo}</div>
  </div>

  <div class="output-footer">
    <div class="font-weight-bold">${dictionary.forms.products.description.label[lang]}</div>
    <div class="font-weight-bold justify-content-center">${dictionary.forms.products.quantity.label[lang]}</div>
    <div class="font-weight-bold justify-content-center">${dictionary.forms.products.price.label[lang]}(bs.)</div>
  `;

  JSON.parse(pedido.lista_productos).forEach(row => {
    const n = (+row[4].slice(1) * pedido.cambio)
    html += `
    <div>${row[1]}</div>
    <div class="justify-content-center">${row[3]}</div>
    <div class="justify-content-end">${formatMoney(n)}</div>
    `
  })

  html += `
  <div></div>
  <div class="justify-content-end">${dictionary.total[lang]}(bs.)</div>
  <div class="justify-content-end">${formatMoney((pedido.total * pedido.cambio))}</div>
  `

  html += `
    <div></div>
    <div class="justify-content-end">${dictionary.total[lang]}($)</div>
    <div class="justify-content-end">${formatMoney(pedido.total)}</div>
  </div>
  `

  return html;
}

/////////////////
///// UTILS /////
/////////////////
function toggleAnimation() {
  crudButtonsWrapper.classList.toggle('show')
  viewport.classList.toggle('hide')
}

function imagePreview() {
  let file = document.querySelector('#imagen');  // Input Type File
  // Elements
  const imgInput = document.querySelector('.input-file');
  const imgSpan = document.querySelector('.image-span');

  // Listeners
  imgInput.addEventListener('change', showPreview);

  function showPreview() {
    const file = this.files[0]; 
    const imgWrappers = document.querySelectorAll('.form-img');

    const reader = new FileReader();
    reader.onload = function(data) {
      imgWrappers.forEach(wrapper => {
        if(file.type.includes('image')) {
          // IMAGE
          const imgElement = document.createElement('img');
          imgElement.src = data.target.result;
          imgSpan.innerHTML = file.name;
          imgSpan.classList.remove('error');
          wrapper.innerHTML = '';
          wrapper.appendChild(imgElement);
        } else {
          // NO COMPATIBLE
          imgSpan.innerHTML = 'ERROR - Selecciona una Imagen';
          imgSpan.classList.add('error');
          wrapper.innerHTML = '';
        }
      });
    };
    reader.readAsDataURL(file);
  }
}

function printMessage(msg = '', type = '', id = '') {
  if(document.querySelector('.message')) document.querySelector('.message').remove()
  const message = document.createElement('div')
  message.className = `message alert alert-${type}`
  message.innerHTML = msg + ' ' + id

  mainBar.appendChild(message)
}

function formatMoney(amount, decimalCount = 2, decimal = ",", thousands = ".") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
  }
};

function print(div)
{
    const x = div.getBoundingClientRect().width
    const y = div.getBoundingClientRect().height
    let mywindow = window.open('', 'PRINT', `height=${y},width=${x}`);

    mywindow.document.write(`
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="../css/bootstrap.min.css">
      <link rel="stylesheet" href="css/style.css">
      <link rel="icon" href="../css/svg/hasbaya-icono-web.svg">
      <title>Hasbaya | Comida Libanea en Casa</title>
    </head>
    <body>
      <div class="output" style="width: ${x}px;height: ${y}px;">
        ${div.innerHTML}
      </div>
    </body>
    </html>
    `);

    return true;
}