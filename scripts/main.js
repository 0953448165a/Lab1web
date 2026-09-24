"use strict";

// Персональні дані студента
const studentName = "Мудрий Ярослав";
const group = "ІН-43-5";
const emoji = "💻";


// Генерує унікальний ідентифікатор сторінки
function generatePageId() {
    const timestamp = new Date()
        .toISOString()
        .replace(/[-:.TZ]/g, "");

    const randomPart = Math.random()
        .toString(36)
        .slice(2, 8)
        .toUpperCase();

    return `LAB1-${timestamp}-${randomPart}`;
}


// Виводить ID сторінки на вебсторінку
function setBadge(id) {
    const badge = document.getElementById("pageIdBadge");

    if (badge) {
        badge.textContent = `PageID: ${id}`;
        badge.setAttribute("data-owner", studentName);
    }
}


// Відображає поточний колір-акцент
function setAccentPreview() {
    const preview = document.querySelector(".accent-preview");

    const accent = getComputedStyle(
        document.documentElement
    )
        .getPropertyValue("--accent")
        .trim();

    if (preview) {
        preview.textContent = accent || "—";
    }
}


// Встановлює поточний рік у футері
function setCurrentYear() {
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}


// Виводить персональне привітання в консоль
function helloConsole(id) {
    console.log(
        `${emoji} Вітаю! Це моя ЛР1. ` +
        `Студент: ${studentName}, ` +
        `група: ${group}. ` +
        `Унікальний ID: ${id}`
    );
}


// Зберігає ID сторінки в localStorage
function savePageId(id) {
    try {
        localStorage.setItem("lab1.pageId", id);
    } catch (error) {
        console.warn(
            "Не вдалося зберегти PageID у localStorage.",
            error
        );
    }
}


// Основний код виконується після завантаження документа
document.addEventListener("DOMContentLoaded", () => {

    const pageId = generatePageId();

    setBadge(pageId);

    setAccentPreview();

    setCurrentYear();

    savePageId(pageId);

    helloConsole(pageId);
});