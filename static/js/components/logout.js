export function logOut() {
    axios.delete("/api/session").then(() => location.reload());
}