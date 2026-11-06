# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Modern Animated Login Page

**Status:** Ready for Development  
**Platform:** Web Application  
**Framework:** Next.js + TypeScript  
**Styling:** Tailwind CSS  
**Animation:** Framer Motion  
**Authentication:** Supabase Auth

---

## 1. Project Overview

Membangun halaman login modern dengan tampilan dark premium, minimalis, elegan, dan animasi yang halus.

Halaman login harus memberikan pengalaman pengguna yang nyaman, responsif, dan profesional, dengan fokus pada visual, interaksi, serta kemudahan autentikasi.

## 2. Project Goals

- Membuat halaman login dengan desain modern dan premium.
- Menggunakan animasi masuk yang halus.
- Memastikan tampilan responsif di desktop, tablet, dan mobile.
- Mengintegrasikan autentikasi menggunakan Supabase.
- Menyediakan validasi form dan feedback yang jelas.
- Menjaga keamanan proses autentikasi.

## 3. Technology Stack

| Technology | Function |
|---|---|
| Next.js | Framework utama |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animasi |
| Supabase Auth | Authentication |
| React Hook Form | Form management |
| Zod | Form validation |
| Lucide React | Icons |

## 4. Design Direction

**Visual Style:** Dark, Premium, Modern, Minimalist.

### Color Palette

| Element | Color |
|---|---|
| Background | #08090D |
| Surface | #11131B |
| Input | #151721 |
| Primary Text | #FFFFFF |
| Secondary Text | #9295A5 |
| Accent | #8B5CF6 |
| Error | #EF4444 |
| Success | #22C55E |

Gunakan border transparan, subtle glow, gradient lembut, dan shadow yang tidak berlebihan.

## 5. Layout Structure

### Desktop

Gunakan layout dua kolom:

- **Left Section:** Visual utama, ilustrasi atau gambar pendukung, serta elemen dekoratif.
- **Right Section:** Form login, judul, deskripsi, input, tombol login, dan opsi autentikasi lainnya.

### Mobile

- Layout menjadi satu kolom.
- Form memenuhi lebar layar dengan padding yang nyaman.
- Visual dekoratif disederhanakan.
- Tombol dan input mudah digunakan dengan sentuhan jari.

## 6. Login Components

1. LoginPage
2. LoginLayout
3. LoginVisual
4. LoginForm
5. EmailInput
6. PasswordInput
7. RememberMe
8. ForgotPasswordLink
9. LoginButton
10. SocialLogin
11. AuthFeedback

## 7. Animation Requirements

Gunakan Framer Motion untuk seluruh animasi antarmuka.

### Initial Animation

- Background muncul dengan efek fade.
- Visual utama masuk dari arah kiri.
- Form masuk dari arah kanan.
- Judul dan deskripsi muncul secara berurutan.
- Input dan tombol muncul menggunakan stagger animation.

### Interaction Animation

- Input memiliki transisi ketika fokus.
- Tombol memiliki efek hover dan tap.
- Loading button memiliki indikator proses.
- Error message muncul menggunakan AnimatePresence.
- Success feedback menggunakan transisi yang halus.

### Performance

- Animasi harus ringan dan tidak mengganggu interaksi.
- Hindari animasi berlebihan.
- Hormati preferensi `prefers-reduced-motion`.
- Pastikan animasi tetap nyaman di perangkat mobile.

## 8. Authentication Features

Gunakan Supabase Auth.

Fitur autentikasi:

- Login menggunakan email dan password.
- Register akun baru.
- Logout.
- Remember session.
- Forgot password.
- Reset password.
- Email verification.
- Google OAuth sebagai fitur opsional.

### Authentication Flow

1. Pengguna membuka halaman `/login`.
2. Pengguna memasukkan email dan password.
3. Sistem melakukan validasi.
4. Data dikirim ke Supabase Auth.
5. Jika berhasil, pengguna diarahkan ke `/dashboard`.
6. Jika gagal, sistem menampilkan pesan kesalahan.

## 9. Application Routes

| Route | Description |
|---|---|
| `/login` | Halaman login |
| `/register` | Registrasi pengguna |
| `/forgot-password` | Pemulihan password |
| `/auth/callback` | OAuth callback |
| `/dashboard` | Halaman setelah login |

## 10. Folder Structure

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── forgot-password/
│   │       └── page.tsx
│   ├── auth/
│   │   └── callback/
│   │       └── route.ts
│   └── dashboard/
│       └── page.tsx
│
├── components/
│   ├── auth/
│   │   ├── LoginLayout.tsx
│   │   ├── LoginVisual.tsx
│   │   ├── LoginForm.tsx
│   │   ├── EmailInput.tsx
│   │   ├── PasswordInput.tsx
│   │   ├── LoginButton.tsx
│   │   └── AuthFeedback.tsx
│   └── ui/
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   └── validations/
│       └── auth.ts
│
├── hooks/
│   └── useAuth.ts
│
└── types/
    └── auth.ts
```

## 11. Environment Variables

Tambahkan konfigurasi berikut ke `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Gunakan publishable key Supabase yang sesuai dengan konfigurasi proyek. Jangan pernah mengekspos service role key di frontend.

## 12. Security Requirements

- Gunakan server-side session handling.
- Validasi input di sisi client dan server.
- Jangan menyimpan password di localStorage.
- Jangan mencatat password atau token sensitif ke log.
- Gunakan Row Level Security (RLS) pada database.
- Pastikan redirect setelah login aman.
- Gunakan HTTPS pada production.
- Terapkan perlindungan terhadap penyalahgunaan autentikasi.

## 13. Acceptance Criteria

Implementasi dinyatakan selesai apabila:

- [ ] Halaman login tampil sesuai desain dark premium.
- [ ] Layout responsif di berbagai ukuran layar.
- [ ] Animasi masuk berjalan dengan baik.
- [ ] Input email dan password berfungsi.
- [ ] Validasi form berjalan.
- [ ] Login Supabase berhasil.
- [ ] Error message tampil dengan benar.
- [ ] Forgot password berfungsi.
- [ ] Session pengguna dapat dipertahankan.
- [ ] Logout berfungsi.
- [ ] Tidak ada error kritis pada console.
- [ ] Animasi tidak mengganggu aksesibilitas.

## 14. Development Roadmap

**Phase 1 — Setup**
- Setup Next.js dan TypeScript.
- Konfigurasi Tailwind CSS.
- Instal Framer Motion.
- Konfigurasi Supabase.

**Phase 2 — UI Development**
- Buat layout login.
- Buat visual utama.
- Buat komponen form.
- Implementasikan responsive design.

**Phase 3 — Animation**
- Implementasikan initial animation.
- Implementasikan input interaction.
- Implementasikan button animation.
- Implementasikan feedback animation.

**Phase 4 — Authentication**
- Integrasikan Supabase Auth.
- Implementasikan login dan register.
- Implementasikan forgot password.
- Implementasikan session handling.

**Phase 5 — Testing**
- Test responsive design.
- Test authentication.
- Test error handling.
- Test animation performance.
- Perbaiki bug sebelum deployment.

## 15. Final Design Principles

1. Jangan mengubah identitas visual utama website.
2. Pertahankan tema dark premium.
3. Hindari elemen visual yang terlalu ramai.
4. Prioritaskan hierarchy dan keterbacaan.
5. Gunakan animasi yang halus dan konsisten.
6. Pastikan semua komponen reusable.
7. Jangan mengorbankan performa demi animasi.

---

**Final Objective:** Menghasilkan halaman login yang modern, elegan, responsif, memiliki animasi berkualitas, serta terintegrasi dengan sistem autentikasi Supabase.