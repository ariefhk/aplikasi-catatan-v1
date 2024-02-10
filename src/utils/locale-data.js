export const navbarLocale = {
    id: {
        title: 'Aplikasi Catatan',
        archive: 'Arsipkan',
        fetching_user: 'Sedang Memuat User...',
    },
    en: {
        title: 'Notes App',
        archive: 'Archived',
        fetching_user: 'Loading Users...',
    },
};

export const homeLocale = {
    id: {
        title: 'Catatan Aktif',
    },
    en: {
        title: 'Active Notes',
    },
};

export const loginLocale = {
    id: {
        title: 'Yuk, login untuk menggunakan aplikasi',
        button: 'Masuk',
        notHaveAccount: {
            prefix: `Belum punya akun?`,
            endfix: `Daftar di sini`,
        },
        error: {
            emailField: {
                required: 'Email tidak boleh kosong!',
                pattern: 'Format email tidak sesuai!',
            },
            passwordField: {
                required: 'Password tidak boleh kosong!',
                minLength: 'Jumlah Karaktek tidak boleh kurang dari 8!',
            },
        },
    },
    en: {
        title: `Let's log in to use the application`,
        button: 'Login',
        notHaveAccount: {
            prefix: `Don't have an account?`,
            endfix: `Register here`,
        },
        error: {
            emailField: {
                required: 'Emails cannot be empty!',
                pattern: 'Incorrect email format!',
            },
            passwordField: {
                required: 'Password cannot be empty!',
                minLength: 'The number of Characters cannot be less than 8!',
            },
        },
    },
};

export const registerLocale = {
    id: {
        title: 'Isi form untuk mendaftar akun',
        button: 'Daftar',
        notHaveAccount: {
            prefix: `Sudah punya akun?`,
            endfix: `Login di sini`,
        },
        error: {
            nameField: {
                required: 'Nama tidak boleh kosong!',
            },
            emailField: {
                required: 'Email tidak boleh kosong!',
                pattern: 'Format email tidak sesuai!',
            },
            passwordField: {
                required: 'Password tidak boleh kosong!',
                minLength: 'Jumlah Karaktek tidak boleh kurang dari 8!',
            },
            confirmPasswordField: {
                required: 'Konfirmasi Password tidak boleh kosong!',
                minLength: 'Jumlah Karaktek tidak boleh kurang dari 8!',
            },
        },
    },
    en: {
        title: `Fill in the form to register an account`,
        button: 'Register',
        notHaveAccount: {
            prefix: `Already have an account?`,
            endfix: `Login here`,
        },
        error: {
            nameField: {
                required: 'Name cannot be empty!',
            },
            emailField: {
                required: 'Emails cannot be empty!',
                pattern: 'Incorrect email format!',
            },
            passwordField: {
                required: 'Password cannot be empty!',
                minLength: 'The number of Characters cannot be less than 8!',
            },
            confirmPasswordField: {
                required: 'Confirm Password cannot be empty!',
                minLength: 'The number of Characters cannot be less than 8!',
            },
        },
    },
};

export const createNoteLocale = {
    id: {
        title: 'Catatan Rahasia',
        body: 'Sebenarnya saya adalah ...',
        error: {
            titleField: {
                required: 'Judul tidak boleh kosong!',
            },
            bodyField: {
                required: 'Deskripsi catatan tidak boleh kosong!',
            },
        },
    },
    en: {
        title: 'Secret Note',
        body: 'Actually I am ...',
        error: {
            titleField: {
                required: 'The title cannot be empty!',
            },
            bodyField: {
                required: 'Note description cannot be empty!',
            },
        },
    },
};

export const archivedLocale = {
    id: {
        title: 'Catatan Arsip',
    },
    en: {
        title: 'Archived Note',
    },
};
