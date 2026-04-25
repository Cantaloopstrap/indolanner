'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet'
import { Calendar, ThumbsUp, Share2 } from 'lucide-react'
import Image from 'next/image'

interface NewsDetailSheetProps {
  isOpen: boolean
  onClose: () => void
  newsItem: {
    id: number
    title: string
    excerpt: string
    date: string
    category: string
    likes: number
    image: string
  } | null
}

// Full article content for each news item
const FULL_CONTENT: Record<number, string> = {
  1: `Kementerian Pariwisata meluncurkan platform digital terintegrasi yang revolusioner untuk mengelola destinasi wisata di seluruh Indonesia. Platform ini menghubungkan pengelola destinasi, pemandu wisata, dan pelancong dalam satu ekosistem digital yang efisien.

Dengan teknologi cloud computing dan AI, sistem ini memungkinkan:
- Manajemen real-time kunjungan wisatawan
- Rekomendasi destinasi personal berbasis AI
- Integrasi booking hotel, transportasi, dan aktivitas
- Analitik mendalam untuk pengembangan destinasi

Digitalisasi ini diharapkan meningkatkan efisiensi operasional hingga 45% dan memberikan pengalaman wisata yang lebih seamless bagi jutaan pengunjung.`,

  2: `Program nasional keselamatan wisata diperkuat dengan standarisasi protokol keamanan yang komprehensif di lebih dari 500 destinasi utama di seluruh nusantara.

Inisiatif ini mencakup:
- Pelatihan intensif untuk 10,000+ petugas keselamatan
- Instalasi infrastruktur darurat di setiap destinasi utama
- Sertifikasi standar internasional untuk operasional wisata
- Monitoring 24/7 menggunakan teknologi IoT terkini
- Asuransi wisata wajib untuk semua pengunjung

Investasi mencapai Rp 2.5 triliun untuk memastikan keselamatan maksimal pengunjung domestik dan mancanegara.`,

  3: `Garuda Indonesia dan maskapai partner membuka 15 rute penerbangan baru yang menghubungkan kota-kota besar di Indonesia dengan destinasi wisata unggulan, termasuk Komodo, Raja Ampat, dan Flores.

Ekspansi penerbangan ini menawarkan:
- Jadwal penerbangan yang lebih frequent
- Harga tiket yang kompetitif dengan diskon khusus paket wisata
- Konektivitas langsung dari Jakarta, Surabaya, dan Medan
- Fasilitas dalam pesawat yang mendukung kenyamanan wisatawan
- Partnership dengan hotel dan operator wisata lokal

Diproyeksikan penambahan 500,000 wisatawan per tahun dengan pembukaan rute-rute strategis ini.`,

  4: `World Travel & Tourism Council (WTTC) secara resmi memberikan penghargaan kepada Bali sebagai destinasi berkelanjutan terbaik di Asia Tenggara untuk tahun 2026.

Pencapaian ini merupakan hasil dari:
- Upaya konservasi lingkungan berkelanjutan
- Pengembangan komunitas lokal yang berkelanjutan
- Manajemen sampah dan energi terbarukan di destinasi utama
- Program pemberdayaan UMKM pariwisata lokal
- Perlindungan heritage budaya dan alam

Penghargaan ini memposisikan Bali sebagai benchmark untuk pariwisata berkelanjutan di kawasan Asia Pasifik.`,

  5: `Festival Kuliner Nusantara 2026 mencatat rekor sebagai event kuliner terbesar di Indonesia dengan menghadirkan pengalaman gastronomi autentik dari seluruh kepulauan.

Event yang berlangsung 3 minggu ini menampilkan:
- 500+ menu autentik dari 34 provinsi Indonesia
- Lebih dari 75,000 pengunjung dari berbagai negara
- Cooking demonstration oleh chef terkenal nasional dan internasional
- Pop-up restaurant dengan chef lokal
- Workshop memasak kuliner tradisional
- Sertifikasi untuk UMKM kuliner berkualitas ekspor

Festival ini juga menjadi platform launching 50+ brand kuliner lokal yang siap go international.`,

  6: `Program konservasi laut di Raja Ampat mencapai milestone signifikan dengan peningkatan populasi terumbu karang sebesar 23% dalam dua tahun terakhir, menunjukkan kesuksesan upaya preservasi biodiversity laut.

Pencapaian konservasi meliputi:
- Perlindungan 4,600+ hektar area terumbu karang
- Pemulihan habitat laut dengan teknologi marine restoration terdepan
- Keterlibatan 5,000+ nelayan lokal dalam program konservasi
- Peningkatan biodiversity spesies ikan sebesar 31%
- Sertifikasi sustainable fishing untuk penangkapan ikan lokal
- Revenue sharing model yang menguntungkan komunitas lokal

Keberhasilan ini menjadikan Raja Ampat sebagai model konservasi laut terbaik di dunia.`,
}

export default function NewsDetailSheet({ isOpen, onClose, newsItem }: NewsDetailSheetProps) {
  if (!newsItem) return null

  const fullContent = FULL_CONTENT[newsItem.id] || newsItem.excerpt

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="w-full sm:max-w-2xl bg-background border-l-4 border-border overflow-y-auto p-0"
      >
        {/* Header with Image */}
        <div className="relative w-full h-64 border-b-4 border-border flex-shrink-0">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4">
            <SheetClose className="bg-background border-4 border-border p-2 hover:bg-accent transition-colors" aria-label="Close">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </SheetClose>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block bg-primary text-primary-foreground px-3 py-1 border-3 border-border font-black text-xs shadow-[2px_2px_0_0] shadow-border">
              {newsItem.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-black font-serif mb-4 text-balance">{newsItem.title}</h2>

          {/* Meta Information */}
          <div className="flex items-center justify-between mb-6 pb-6 border-b-4 border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-bold">
              <Calendar size={16} />
              <span>{new Date(newsItem.date).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-black">
              <ThumbsUp size={16} className="text-primary" />
              <span>{newsItem.likes}</span>
            </div>
          </div>

          {/* Full Article Content */}
          <div className="space-y-4 mb-8 text-foreground/80 leading-relaxed">
            {fullContent.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-base">{paragraph}</p>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-6 border-t-4 border-border">
            <button className="w-full px-4 py-3 bg-secondary text-secondary-foreground border-4 border-border font-bold flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              <ThumbsUp size={18} />
              Suka ({newsItem.likes})
            </button>
            <button className="w-full px-4 py-3 bg-accent text-accent-foreground border-4 border-border font-bold flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              <Share2 size={18} />
              Bagikan
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
