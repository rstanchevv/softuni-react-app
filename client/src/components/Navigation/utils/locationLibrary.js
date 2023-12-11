export const locationLibrary = (location) => {
    const library = {
        '/catalog': 'nav-link nav-link-1 active',
        '/login': 'nav-link nav-link-2 active',
        '/register': 'nav-link nav-link-3 active'
    }
    return locationLibrary[location]
}