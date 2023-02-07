import createElement from '../../assets/lib/create-element.js';
export default class Modal {
  constructor() {
    this.elem = createElement(`
    <div class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="../../assets/images/icons/cross-icon.svg" alt="close-icon"/>
          </button>
          <h3 class="modal__title"></h3>
        </div>
        <div class="modal__body"></div>
      </div>
    </div>`);    
  }
  open() {  
    document.body.append(this.elem);   
    let modalClose = this.elem.querySelector('.modal__close');
    modalClose.addEventListener('click', this.close);
    document.addEventListener('keydown', this.closeEsc);        
    document.body.classList.add('is-modal-open'); 
  }
  setTitle = (title) => {
    const modalTitle = this.elem.querySelector('.modal__title');
    modalTitle.append(title);
  }
  setBody = (node) => {
    const modalBody = this.elem.querySelector('.modal__body');
    modalBody.append(node);
  }
  close = () =>{    
    this.elem.remove();
    document.body.classList.remove('is-modal-open');
    document.removeEventListener('keydown', this.closeEsc);
  }
  closeEsc = (event) => {
    if (event.code === 'Escape') {
      this.close();
    }
  }
}
