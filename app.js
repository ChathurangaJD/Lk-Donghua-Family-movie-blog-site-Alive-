$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    function addComment(parentId = null, textareaId = 'main-comment') {
        const text = document.getElementById(textareaId).value.trim();
        if (text === '') return;
      
        const commentBox = document.createElement('div');
        commentBox.className = 'comment';
        commentBox.innerHTML = `
          <p>${text}</p>
          <button onclick="showReplyBox(this)">Reply</button>
          <div class="replies"></div>
        `;
      
        if (parentId) {
          document.getElementById(parentId).querySelector('.replies').appendChild(commentBox);
        } else {
          document.getElementById('comments-container').appendChild(commentBox);
        }
      
        document.getElementById(textareaId).value = '';
      }
      
      function showReplyBox(button) {
        const parentComment = button.parentElement;
        const replyId = 'reply-' + Math.random().toString(36).substr(2, 9);
      
        const replyBox = document.createElement('div');
        replyBox.innerHTML = `
          <textarea id="${replyId}" placeholder="Write a reply..."></textarea>
          <button onclick="addComment('${parentComment.id || assignId(parentComment)}', '${replyId}')">Reply</button>
        `;
        button.disabled = true;
        parentComment.appendChild(replyBox);
      }
      
      function assignId(element) {
        const id = 'comment-' + Math.random().toString(36).substr(2, 9);
        element.id = id;
        return id;
      }
})

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name && email && message) {
    formMessage.textContent = "Thank you for contacting us!";
    formMessage.style.color = "lightgreen";

    // Reset form
    this.reset();
  } else {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
  }
});


