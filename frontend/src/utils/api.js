export async function fetchBirthdays() {
    const response = await fetch('/api/birthdays');
    return response.json();
}

export const getTokenFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('token'); // Url nundi token ni extract chesthundhi
}

export const setAuthToken = (token) => {
    localStorage.setItem('authToken', token); // localStorage lo token ni store chesthundhi
}

export const getAuthToken = () => {
    return localStorage.getItem('authToken'); // localStorage nundi token ni retrieve chesthundhi
}