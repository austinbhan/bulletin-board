const SUPABASE_URL = 'https://ekvctprnmhlihrtxfomc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrdmN0cHJubWhsaWhydHhmb21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMTI1MDcsImV4cCI6MTk2Nzg4ODUwN30.3DwFaO1PRQPJQBj3OEs8ed-pA5qQ_7kbxTiw3YzzplY';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Fetch All Posts
export async function fetchPosts() { 
    const response = await client.from('POST_HISTORY').select('*');

    return response.data;
}

// Fetch One post
export async function fetchPost(id) {
    const response = await client.from('POST_HISTORY').select('*').match({ id: id }).single();
    return response.data;
}

// Login New Users
export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

// Login Existing Users
export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

// Check Username Database
export async function checkUser() {
    return client.auth.session() && client.auth.session().user;
}

// If New User or Not Logged In Creation Page, Move Back to Login
export async function checkAuth() {
    const user = checkUser();
    if (!user) {
        alert('You are not logged in yet!');
        location.change('./login-screen');
    }
}