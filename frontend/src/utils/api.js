export async function fetchBirthdays() {
    const response = await fetch('/api/birthdays');
    return response.json();
}