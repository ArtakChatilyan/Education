const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible-expanded");
  })
);

const ele = document.getElementsByClassName('blog__body')[0];
ele.scrollLeft=160;
let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
  ele.style.cursor = 'grabbing';
  ele.style.userSelect = 'none';
    pos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;

  ele.scrollTop = pos.top - dy;
  ele.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
  document.removeEventListener('mousemove', mouseMoveHandler);
  document.removeEventListener('mouseup', mouseUpHandler);

  ele.style.cursor = 'grab';
  ele.style.removeProperty('user-select');
};

ele.addEventListener('mousedown', mouseDownHandler);