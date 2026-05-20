// Sidebar toggle
const btn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const wrapper = document.getElementById('wrapper');
btn.addEventListener('click', function() {
  sidebar.classList.toggle('open');
  if (sidebar.classList.contains('open')){
    wrapper.style.marginLeft = '200PX';
  }else{
    wrapper.style.marginLeft = '50px';
  }
  }
);

// Page switch
function showPage(pageId, clickedItem) {
  document.querySelectorAll('.page').forEach(function(p) {
    p.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';

  document.querySelectorAll('.nav-item').forEach(function(item) {
    item.classList.remove('active');
  });
  clickedItem.classList.add('active');

  document.getElementById('pageTitle').textContent =
    clickedItem.querySelector('.label').textContent;
}

// Default: home show, first nav-item active
document.querySelectorAll('.page').forEach(function(p) {
  p.style.display = 'none';
});
document.getElementById('home').style.display = 'block';
document.querySelectorAll('.nav-item')[0].classList.add('active');

// User dropdown
const userBtn = document.getElementById('userBtn');
const dropdown = document.getElementById('dropdown');
userBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  dropdown.classList.toggle('show');
});
document.addEventListener('click', function() {
  dropdown.classList.remove('show');
});

// Theme toggle
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  themeBtn.textContent = document.body.classList.contains('dark')
    ? '☀️ Light' : '🌙 Dark';
});