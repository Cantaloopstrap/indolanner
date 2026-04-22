export const INDONESIAN_CITIES = [
  // Java
  { name: 'Yogyakarta', lat: -7.7956, lng: 110.3695, island: 'Java', iqair: 58, temperature: 28, pollution: 'Sedang' as const },
  { name: 'Bandung', lat: -6.9175, lng: 107.6191, island: 'Java', iqair: 72, temperature: 24, pollution: 'Sedang' as const },
  { name: 'Malang', lat: -7.9666, lng: 112.6326, island: 'Java', iqair: 45, temperature: 25, pollution: 'Bagus' as const },
  { name: 'Solo', lat: -7.5755, lng: 110.8243, island: 'Java', iqair: 55, temperature: 29, pollution: 'Sedang' as const },
  { name: 'Jakarta', lat: -6.2088, lng: 106.8456, island: 'Java', iqair: 125, temperature: 32, pollution: 'Buruk' as const },
  // Bali & East
  { name: 'Denpasar', lat: -8.6705, lng: 115.2126, island: 'Bali', iqair: 35, temperature: 28, pollution: 'Bagus' as const },
  { name: 'Ubud', lat: -8.5069, lng: 115.2625, island: 'Bali', iqair: 28, temperature: 26, pollution: 'Bagus' as const },
  // East Java
  { name: 'Batu', lat: -7.8672, lng: 112.5239, island: 'Java', iqair: 38, temperature: 22, pollution: 'Bagus' as const },
  // Nusa Tenggara
  { name: 'Labuan Bajo', lat: -8.4967, lng: 119.8877, island: 'Nusa Tenggara', iqair: 22, temperature: 30, pollution: 'Bagus' as const },
  // Sumatra
  { name: 'Bukittinggi', lat: -0.3055, lng: 100.3691, island: 'Sumatra', iqair: 42, temperature: 24, pollution: 'Bagus' as const },
  { name: 'Padang', lat: -0.9471, lng: 100.4172, island: 'Sumatra', iqair: 48, temperature: 28, pollution: 'Bagus' as const },
  { name: 'Palembang', lat: -2.9761, lng: 104.7754, island: 'Sumatra', iqair: 85, temperature: 31, pollution: 'Sedang' as const },
  // Papua
  { name: 'Raja Ampat', lat: -0.2348, lng: 130.5170, island: 'Papua', iqair: 15, temperature: 29, pollution: 'Bagus' as const },
  // Sulawesi
  { name: 'Manado', lat: 1.4748, lng: 124.8421, island: 'Sulawesi', iqair: 32, temperature: 28, pollution: 'Bagus' as const },
  // Kalimantan
  { name: 'Bontang', lat: 0.1217, lng: 117.4724, island: 'Kalimantan', iqair: 65, temperature: 30, pollution: 'Sedang' as const },
]

export type City = typeof INDONESIAN_CITIES[number]
