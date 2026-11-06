# ANIMATION & MOTION SPECIFICATION
## Modern Animated Login Page

**Animation Library:** Framer Motion  
**Priority:** Mandatory  
**Animation Style:** Smooth, Cinematic, Premium, Fluid

Semua elemen penting pada halaman login wajib memiliki animasi yang terencana menggunakan Framer Motion.

## 1. Opening Animation — Page Entrance

Ketika pengguna pertama kali membuka halaman login:

1. Background muncul menggunakan efek opacity fade-in.
2. Ambient gradient bergerak perlahan di background.
3. Visual utama muncul dari arah kiri dengan efek blur-to-focus.
4. Login card muncul dari arah kanan dengan gerakan spring yang halus.
5. Heading muncul menggunakan stagger animation.
6. Input email dan password muncul secara berurutan.
7. Tombol login muncul terakhir dengan sedikit scale animation.

**Target:** Memberikan kesan cinematic dan premium saat halaman pertama kali dibuka.

## 2. Background Animation

Gunakan elemen dekoratif seperti:
- Animated gradient blobs.
- Soft purple ambient glow.
- Floating particles yang sangat subtle.
- Gradient light yang bergerak perlahan.
- Blur effects pada elemen dekoratif.

Background harus tetap gelap dan tidak mengganggu keterbacaan form.

## 3. Login Visual Animation

Visual utama pada sisi kiri memiliki:
- Fade-in dan slide-up saat pertama kali muncul.
- Floating animation dengan gerakan vertikal yang lembut.
- Subtle scale animation.
- Parallax effect ringan saat pointer bergerak, khusus desktop.

Animasi tidak boleh terasa berlebihan.

## 4. Form Animation

Setiap komponen form menggunakan animasi bertahap:

| Component | Animation |
|---|---|
| Heading | Fade + slide up |
| Description | Fade + slide up |
| Email input | Fade + slide up |
| Password input | Fade + slide up |
| Remember me | Fade in |
| Forgot password | Fade in |
| Login button | Fade + scale |
| Social login | Fade + slide up |

Gunakan staggerChildren agar elemen tidak muncul secara bersamaan.

## 5. Input Interaction Animation

Saat input mendapatkan fokus:
- Border berubah menjadi accent purple.
- Background berubah sedikit lebih terang.
- Soft glow muncul di sekitar input.
- Label atau placeholder memiliki transisi yang halus.

Saat kehilangan fokus:
- Glow menghilang secara perlahan.
- Border kembali ke keadaan normal.

## 6. Button Animation

Tombol login harus memiliki beberapa state:

**Idle**
- Tampilan normal dengan accent gradient.

**Hover**
- Scale sedikit meningkat.
- Glow bertambah.
- Background gradient bergeser secara halus.

**Tap**
- Scale mengecil sedikit.

**Loading**
- Tampilkan loading spinner.
- Teks berubah menjadi "Signing in...".
- Tombol tidak dapat ditekan berulang kali.

**Success**
- Ikon success muncul.
- Tampilkan feedback singkat.
- Lanjutkan redirect ke dashboard.

## 7. Error & Success Animation

Gunakan AnimatePresence dari Framer Motion.

**Error:**
- Pesan muncul dari bawah.
- Opacity berubah dari 0 menjadi 1.
- Gunakan transisi singkat tanpa gerakan berlebihan.

**Success:**
- Ikon check muncul dengan scale animation.
- Warna feedback berubah menjadi hijau.
- Transisi terasa halus.

## 8. Page Transition

Gunakan AnimatePresence untuk perpindahan halaman autentikasi:

- Login ke Register.
- Register ke Login.
- Login ke Forgot Password.
- Forgot Password ke Login.

Gunakan fade dan slide transition yang konsisten.

Jangan menambahkan transisi yang menyebabkan navigasi terasa lambat.

## 9. Framer Motion Implementation

Contoh standar implementasi animasi:

```tsx
"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function LoginAnimation() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants}>
        Welcome Back
      </motion.h1>

      <motion.p variants={itemVariants}>
        Sign in to continue your journey.
      </motion.p>

      <motion.div variants={itemVariants}>
        {/* Email input */}
      </motion.div>

      <motion.div variants={itemVariants}>
        {/* Password input */}
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Sign In
      </motion.button>
    </motion.div>
  );
}
```

## 10. Animation Performance Rules

- Gunakan Framer Motion untuk animasi komponen UI.
- Utamakan transform dan opacity.
- Hindari animasi layout yang berat.
- Jangan membuat terlalu banyak particle.
- Jangan menggunakan animasi infinite pada semua elemen.
- Gunakan `prefers-reduced-motion` untuk pengguna yang membatasi animasi.
- Pastikan animasi tetap lancar di perangkat mobile.

## 11. Mandatory Animation Acceptance Criteria

- [ ] Background memiliki animated ambient glow.
- [ ] Visual utama memiliki entrance animation.
- [ ] Form memiliki stagger animation.
- [ ] Heading dan deskripsi memiliki reveal animation.
- [ ] Input memiliki focus animation.
- [ ] Button memiliki hover dan tap animation.
- [ ] Loading state memiliki animasi.
- [ ] Error message memiliki AnimatePresence.
- [ ] Success state memiliki animasi.
- [ ] Page transition menggunakan Framer Motion.
- [ ] Semua animasi responsif dan memperhatikan reduced motion.

**FINAL REQUIREMENT:**

Framer Motion wajib digunakan dalam implementasi halaman login. Jangan mengganti seluruh animasi dengan CSS biasa. CSS boleh digunakan untuk styling, tetapi entrance animation, stagger animation, interaction animation, feedback animation, dan page transition harus diimplementasikan menggunakan Framer Motion.