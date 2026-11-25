# Javan — Automated E2E Testing

Suite pengujian End-to-End (E2E) berbasis **Cypress** untuk memverifikasi alur dan halaman di situs [javan.co.id](https://javan.co.id/). Tes di repo ini difokuskan pada pengecekan regresi / bug pada halaman Contact Us, Solutions, Product & Service, dan halaman 404.

## Teknologi

| Dependency | Versi | Fungsi |
| --- | --- | --- |
| [Cypress](https://www.cypress.io/) | `^14.0.3` | Framework E2E testing |
| [TypeScript](https://www.typescriptlang.org/) | `^5.7.3` | Penulisan test & custom command |

Tidak ada runtime aplikasi di repo ini — ini murni projek testing yang menargetkan situs live.

## Prasyarat

- [Node.js](https://nodejs.org/) (disarankan LTS, mis. v18 atau lebih baru)
- npm (bundled bersama Node.js)
- Koneksi internet (karena tes mengakses `https://javan.co.id/` langsung)

## Instalasi

```bash
git clone git@github.com:dikurrrr/Javan.git
cd Javan
npm install
```

## Menjalankan Tes

Buka Cypress GUI (interactive runner):

```bash
npx cypress open
```

Jalankan semua tes tanpa GUI (headless, cocok untuk CI):

```bash
npx cypress run
```

Jalankan satu spec tertentu:

```bash
npx cypress run --spec "cypress/e2e/bug_contactUs.cy.ts"
```

> Catatan: `package.json` belum mendefinisikan `scripts`, jadi gunakan `npx cypress ...` langsung.

## Struktur Direktori

```
.
├── cypress.config.ts            # Konfigurasi Cypress (viewport, timeout, video, supportFile)
├── tsconfig.json                # Konfigurasi TypeScript
├── package.json                 # Dependency (cypress, typescript)
└── cypress/
    ├── e2e/                     # File spec (.cy.ts)
    │   ├── bug_contactUs.cy.ts
    │   ├── contactUsPhone.cy.ts
    │   ├── bug_contactUsRetails.cy.ts
    │   ├── bug_contactUsBanking.cy.ts
    │   ├── bug_productService.cy.ts
    │   └── bug_page404.cy.ts
    ├── fixtures/
    │   └── example.json         # Contoh fixture bawaan Cypress
    └── support/
        ├── e2e.ts               # Entry point, meng-import commands.ts
        ├── commands.ts          # Semua custom command (cy.URL(), dll.)
        └── declare.ts           # Deklarasi tipe TypeScript untuk custom command
```

## Skenario Tes

| Spec | Alur yang diuji |
| --- | --- |
| `bug_contactUs.cy.ts` | Membuka halaman utama lalu mengakses halaman Contact Us |
| `contactUsPhone.cy.ts` | Membuka halaman utama lalu memilih kontak via **Phone** |
| `bug_contactUsRetails.cy.ts` | Solutions → Private Sector → Retail → produk **SPOP** & **SYARQ** |
| `bug_contactUsBanking.cy.ts` | Solutions → Private Sector → Banking → **BTPN**, lalu navigasi `goBack` |
| `bug_productService.cy.ts` | Product & Service → Business Optimization, Web App & Mobile Development, Data Analytics, Product Development |
| `bug_page404.cy.ts` | Mengecek halaman **Portofolio** & **Our Quality** (halaman 404) |

Setiap skenario diawali dengan `cy.URL()` dan diakhiri `cy.klirkuki()` untuk membersihkan cookies.

## Custom Commands

Custom command didefinisikan di `cypress/support/commands.ts` dan dideklarasikan di `cypress/support/declare.ts`.

| Command | Fungsi |
| --- | --- |
| `cy.URL()` | Mengunjungi `https://javan.co.id/` |
| `cy.klirkuki()` | Menunggu lalu `clearCookies()` (reset sesi antar tes) |
| `cy.contactUs()` | Klik tombol Contact Us |
| `cy.contactPhone()` | Pilih opsi kontak Phone |
| `cy.Solutions()` | Buka tab Solutions di header |
| `cy.privateSector()` | Buka halaman Private Sector |
| `cy.Banking()` | Buka halaman Banking |
| `cy.BTPN()` | Klik produk BTPN |
| `cy.Retails()` | Buka halaman Retail |
| `cy.SPOP()` | Klik produk SPOP |
| `cy.SYARQ()` | Klik produk SYARQ |
| `cy.productService()` | Buka halaman Product & Service |
| `cy.BusinessOptimization()` | Buka layanan Business Optimization |
| `cy.WebAppMobileDevelopment()` | Buka layanan Web App & Mobile Development |
| `cy.DataAnalytics()` | Buka layanan Data Analytics |
| `cy.ProductDevelopment()` | Buka layanan Product Development |
| `cy.ManagedServices()` | Buka layanan Managed Services |
| `cy.portofolio()` | Buka halaman Portofolio |
| `cy.ourQuality()` | Buka halaman Our Quality |
| `cy.goBack()` | Navigasi kembali melalui beberapa halaman industry |

## Konfigurasi

`cypress.config.ts` mengatur:

- **Video**: aktif (`video: true`, `videoCompression: true`)
- **Viewport**: 1536 × 960
- **Timeout**: `defaultCommandTimeout` 60s, `pageLoadTimeout` 60s, `requestTimeout` 45s
- **supportFile**: `cypress/support/e2e.ts` untuk mode e2e

## Catatan

- Tes menargetkan **situs live**, sehingga hasilnya bergantung pada ketersediaan dan konten `javan.co.id`.
- Selektor berbasis CSS/DOM situs (mis. `#wrapwrap`, `[href='/en/solution']`) — perubahan struktur situs dapat membuat tes gagal dan perlu diperbarui.
- Saat ini spec lebih berupa skrip navigasi/smoke: sebagian besar langkah belum memiliki assertion eksplisit (`should(...)`). Menambahkan assertion akan membuat hasil tes lebih bermakna.
- Blok `describe(...)` di beberapa spec masih dikomentari; tes ditulis langsung sebagai `it(...)`.

## Kontribusi

1. Buat branch baru dari `main`.
2. Tambahkan atau ubah spec di `cypress/e2e/`.
3. Jika menambah custom command, daftarkan juga tipenya di `cypress/support/declare.ts`.
4. Jalankan `npx cypress run` sebelum membuat pull request.
