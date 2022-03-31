const inputBox = document.querySelector('.inputField input');
const addButton = document.querySelector('.inputField button');
const todoList = document.querySelector('.todoList');
const deleteButton = document.querySelector('.footer button');

inputBox.onkeyup = () => {
  //Lấy giá trị khi người dùng nhập vào
  let userEnterText = inputBox.value;

  //Nếu người dùng nhập vào giá trị mà không phải khoảng trắng
  if (userEnterText.trim() != 0) {
    // Thì nút add sẽ sáng lên
    //Trường hợp nếu nhập toàn khoảng trắng thì sẽ không sáng lên
    addButton.classList.add('active');
  } else {
    //Ngược lại thì nút add sẽ tắt
    addButton.classList.remove('active');
  }
};

showTasks();

//Hàm thao tác với nút add
addButton.onclick = () => {
  //Khi người dùng nhấn vào nút add
  //Lấy giá trị người dùng nhập vào
  let userEnterText = inputBox.value;
  //Lấy localStorage (biến lưu trữ cục bộ)
  let getLocalStorageData = localStorage.getItem('New todo');
  if (getLocalStorageData == null) {
    //Nếu localStorage chưa có dữ liệu thì tạo mảng rỗng
    listArray = [];
  } else {
    //Nếu localStorage đã có dữ liệu thì chuyển JSON dạng từ string sang Object
    listArray = JSON.parse(getLocalStorageData);
  }
  //Đưa giá trị vào mảng
  listArray.push(userEnterText);
  //Chuyển JSON từ dạng Object sang dạng string
  localStorage.setItem('New todo', JSON.stringify(listArray));
  showTasks();
  addButton.classList.remove('active');
};

function showTasks() {
  let getLocalStorageData = localStorage.getItem('New todo');
  if (getLocalStorageData == null) {
    //Nếu localStorage chưa có dữ liệu thì tạo mảng rỗng
    listArray = [];
  } else {
    //Nếu localStorage đã có dữ liệu thì chuyển JSON dạng từ string sang Object
    listArray = JSON.parse(getLocalStorageData);
  }
  const pendingTasksNumb = document.querySelector('.pendingTasks');
  pendingTasksNumb.textContent = listArray.length;
  if (listArray.length > 0) {
    deleteButton.classList.add('active');
  } else {
    deleteButton.classList.remove('active');
  }
  let newLiTag = '';
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag;
  inputBox.value = '';
}

function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem('New todo');
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  listArray.setItem('New todo', JSON.stringify(listArray));
  showTasks();
}

deleteButton.onclick = () => {
  listArray = [];
  localStorage.setItem('New todo', JSON.stringify(listArray));
  showTasks();
};
