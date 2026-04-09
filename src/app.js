const status = import.meta.env.VITE_APP_STATUS;

const statusElement = document.getElementById("app-status");
if (statusElement) {
  statusElement.textContent = status || "Status Unknown";
}
