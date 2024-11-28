function opensearchbar(){
    'use strict';
    const searchpanel = document.getElementById ("searchbar");
    if (searchpanel) {
        searchpanel.style.display = 'flex';
    } else {
        console.error ('error: searchpanel not found')
    }
}

function closesearchbar(){
    'use strict';
    const searchpanel = document.getElementById ("searchbar");
    if (searchpanel) {
        searchpanel.style.display = 'none';
    } else {
        console.error ('error: searchpanel not found')
    }
}

function opensidebar() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar) {
        sidebar.style.display = "block";
    } else {
        console.error("Element with ID 'sidebar' not found.");
    }
}

function closesidebar() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar) {
        sidebar.style.display = "none";
    } else {
        console.error("Element with ID 'sidebar' not found.");
    }
}

function chenonedropdownopen1() {
    const dropdownContainer = document.querySelector('.footer-chenone-container');
    const dropdownContent = document.querySelector('.footer-chenone-content');
    const arrow = document.querySelector('.footer-down-arrow1');

    dropdownContainer.classList.toggle('active'); // Toggle 'active' class for expansion

    // Rotate the arrow
    if (dropdownContainer.classList.contains('active')) {
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
        arrow.style.transform = 'rotate(180deg)';
    } else {
        dropdownContent.style.maxHeight = '0';
        arrow.style.transform = 'rotate(0deg)';
    }
}

function chenonedropdownopen2() {
    const dropdownContainer = document.querySelector('.footer-policies-container');
    const dropdownContent = document.querySelector('.footer-policies-content');
    const arrow = document.querySelector('.footer-down-arrow2');

    dropdownContainer.classList.toggle('active'); // Toggle 'active' class for expansion

    // Rotate the arrow
    if (dropdownContainer.classList.contains('active')) {
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
        arrow.style.transform = 'rotate(180deg)';
    } else {
        dropdownContent.style.maxHeight = '0';
        arrow.style.transform = 'rotate(0deg)';
    }
}

function chenonedropdownopen3() {
    const dropdownContainer = document.querySelector('.footer-find-us-container');
    const dropdownContent = document.querySelector('.footer-find-us-content');
    const arrow = document.querySelector('.footer-down-arrow3');

    dropdownContainer.classList.toggle('active'); // Toggle 'active' class for expansion

    // Rotate the arrow
    if (dropdownContainer.classList.contains('active')) {
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
        arrow.style.transform = 'rotate(180deg)';
    } else {
        dropdownContent.style.maxHeight = '0';
        arrow.style.transform = 'rotate(0deg)';
    }
}