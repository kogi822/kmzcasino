# Kraken Alpha - Strona Casino

Nowoczesna strona internetowa prezentująca ekskluzywne bonusy kasyn, inspirowana designem [kraken-alpha.vercel.app](https://kraken-alpha.vercel.app/).

## Funkcje

- **Ciemny motyw** z gradientami i animowanymi kartami
- **Sekcja bonusów** z ofertami kasyn (IRWIN, MR PUNTER, LEGIANO)
- **Sekcja social media** z linkami do Kick, Instagram, Twitter, YouTube
- **Poradnik zarabiania** z doświadczeniami z gier
- **Instrukcje dostępu** z metodami DNS i VPN
- **Responsywny design** dla wszystkich urządzeń
- **Interaktywne elementy** z efektami hover i animacjami

## Struktura strony

### Sekcje:
1. **Hero Section** - Główny tytuł "EKSKLUZYWNE BONUSY KRAKENA"
2. **Offers Section** - 3 karty z bonusami kasyn
3. **Boxing Ring** - Sekcja placeholder
4. **Social Media** - 4 karty z social media
5. **Money Making** - Poradnik zarabiania i doświadczenia
6. **Access Instructions** - Instrukcje DNS i VPN
7. **Important Information** - Ważne informacje prawne

### Elementy interaktywne:
- **Przyciski kopiowania** dla serwerów DNS
- **Efekty hover** na kartach
- **Animacje ripple** na przyciskach
- **Parallax effect** dla pływających kart
- **Typing effect** w tytule głównym
- **Counter animation** dla procentów bonusów

## Lokalny rozwój

1. Pobierz lub sklonuj to repozytorium
2. Otwórz `index.html` w przeglądarce
3. Lub uruchom lokalny serwer:
   ```bash
   # Używając Python
   python -m http.server 8000
   
   # Używając Node.js (jeśli masz zainstalowany http-server)
   npx http-server
   ```

## Wdrożenie na Vercel

### Opcja 1: Drag and Drop (Najłatwiejsza)

1. Przejdź na [vercel.com](https://vercel.com)
2. Zarejestruj się lub zaloguj do swojego konta
3. Kliknij "New Project"
4. Przeciągnij i upuść cały folder zawierający `index.html`, `styles.css` i `script.js`
5. Vercel automatycznie wykryje to jako stronę statyczną
6. Kliknij "Deploy"

### Opcja 2: Używając Vercel CLI

1. Zainstaluj Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Przejdź do katalogu projektu:
   ```bash
   cd twoj-folder-projektu
   ```

3. Wdróż na Vercel:
   ```bash
   vercel
   ```

4. Postępuj zgodnie z instrukcjami, aby zakończyć wdrożenie

### Opcja 3: Integracja z GitHub

1. Wypchnij kod do repozytorium GitHub
2. Przejdź na [vercel.com](https://vercel.com)
3. Kliknij "New Project"
4. Zaimportuj swoje repozytorium GitHub
5. Vercel automatycznie wdroży Twoją stronę

## Dostosowanie

### Kolory
Główne kolory gradientów są zdefiniowane w `styles.css`:
- Główny gradient: `#667eea` do `#764ba2`
- Tło: `#0a0a0a` (ciemne)
- Tekst: `#ffffff` (biały)
- Tekst drugorzędny: `#a0a0a0` (szary)

### Treść
Edytuj treść w `index.html`:
- Zmień tytuł główny i podtytuł
- Zaktualizuj karty bonusów
- Zmodyfikuj linki social media
- Dostosuj treść poradnika

### Stylowanie
Modyfikuj `styles.css`, aby:
- Zmienić kolory i gradienty
- Dostosować odstępy i typografię
- Dodać nowe animacje
- Zmodyfikować breakpointy responsywne

## Struktura plików

```
├── index.html          # Główny plik HTML
├── styles.css          # Style CSS
├── script.js           # JavaScript z interakcjami
└── README.md          # Ten plik
```

## Wsparcie przeglądarek

- Chrome (najnowsza wersja)
- Firefox (najnowsza wersja)
- Safari (najnowsza wersja)
- Edge (najnowsza wersja)

## Wydajność

Strona jest zoptymalizowana pod kątem szybkiego ładowania:
- Minimalny CSS i HTML
- Brak zewnętrznych zależności oprócz Google Fonts
- Zoptymalizowane animacje używające CSS transforms
- Responsywne obrazy i układy

## Funkcje JavaScript

- **Kopiowanie DNS** - Przyciski do kopiowania serwerów DNS
- **Smooth scrolling** - Płynne przewijanie do sekcji
- **Hover effects** - Efekty hover na kartach
- **Ripple effects** - Efekty kliknięcia na przyciskach
- **Parallax** - Efekt parallax dla pływających kart
- **Typing effect** - Efekt pisania w tytule
- **Counter animation** - Animacja liczników procentów

## Licencja

Ten projekt jest open source i dostępny na licencji [MIT License](LICENSE). 