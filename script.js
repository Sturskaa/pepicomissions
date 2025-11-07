// ============================================================================
// 🎯 HOW TO UPDATE QUEUE STATUS
// ============================================================================
// To change the queue status indicator, search for "QUEUE_STATUS" in this file
// and change its value to one of these options:
//   'red'    - "Tem muita gente na fila" (Queue is very full)
//   'orange' - "A fila está enchendo" (Queue is filling up)
//   'green'  - "A fila tá baixa" (Queue is low)
//   'white'  - "Em pouco tempo você será chamado" (You'll be called soon)
// ============================================================================

// Wait for DOM to be fully loaded
// Wait for DOM to be ready
function initWebsite() {
    
    // ========== TRANSLATIONS ==========
    const translations = {
        en: {
            // Navigation
            nav_home: "Home",
            nav_about: "About",
            nav_gallery: "Gallery",
            nav_pricing: "Pricing",
            nav_contact: "Contact",
            
            // Translation Button
            translate_button: "Translate",
            select_language: "Select Language",
            
            // Hero
            hero_subtitle: "Art with Specialization in Furrys, Militarism and Historical Themes",
            hero_cta: "Price Table",
            
            // About
            about_title: "About the Artist",
            about_intro: "Welcome to my artistic universe! My name is Dimitri, but I'm known as PEPI and I'm an illustrator and World War II historical reenactor, I've been doing commissions for 6 years, passionate about creating furry art covering historical subjects, with varied characters and themes.",
            about_p1: "I work with various types of art, from complex scenes with vehicles and crowds to a simple bust, I love working with historical-military subjects, I deeply immerse myself in World War I and World War II, detailed military uniforms, authentic weaponry, atmospheric scenes and period vehicles - I love bringing history to life through anthropomorphic characters.",
            about_p2: "Whether you're looking for a character icon, a detailed full-body illustration with backgrounds, or a complex scene, I work in both <strong>traditional and digital mediums</strong> to bring your vision to reality.",
            tag_wwi: "WWI/WWII Themes",
            tag_uniforms: "Military Uniforms",
            tag_vehicles: "Historical Vehicles",
            tag_weaponry: "Weaponry",
            tag_furry: "Furry Characters",
            
            // Gallery
            gallery_title: "My Work",
            gallery_subtitle: "Explore my diverse furry art styles",
            military_title: "Militarism/History",
            vehicles_title: "Vehicles/Standard",
            
            // Pricing
            pricing_title: "Commission Pricing",
            pricing_subtitle: "Choose your commission type and extras",
            pricing_bio: "Here you can build your art the way you prefer, feel free to choose! I don't sell work in progress, only finished art. If you have any questions, feel free to contact me in private!",
            pricing_body_type: "Art Type",
            pricing_background_type: "Background",
            pricing_extras: "Extras",
            
            price_icon_title: "Bust",
            price_icon_desc: "From head to shoulders",
            price_halfbody_title: "Half Body",
            price_halfbody_desc: "Head to waist (note: if you want the character's thighs to show, it will be charged as full body since it goes past the waist)",
            price_fullbody_title: "Full Body",
            price_fullbody_desc: "From head to toe!",
            price_refsheet_title: "Reference Sheet",
            price_refsheet_desc: "Reference sheet would be the character from front and back, separated limbs for better visualization, color palette organized according to preference",
            
            price_no_bg: "Standard",
            price_no_bg_desc: "Transparent or solid color background",
            price_normal: "Simple",
            price_normal_desc: "Simple backgrounds are those with few elements like a meadow, a camp, city street etc",
            price_complex: "Detailed",
            price_complex_desc: "Detailed backgrounds are those with many elements, like vehicles, crowds, places with various exposed items etc",
            
            extra_bg: "Background",
            extra_bg_desc: "In case of ordering a comic or something similar, and need to have two different backgrounds in one art",
            extra_char: "Additional Character",
            extra_char_desc: "In case of inserting another original character/OC in the art",
            extra_nsfw_title: "NSFW",
            extra_nsfw_desc: "Adult content (+18)",
            
            btn_add: "Add",
            btn_remove: "Remove",
            
            // Queue Status
            queue_label: "Queue Status:",
            queue_red: "Queue is very full",
            queue_orange: "Queue is filling up",
            queue_green: "Queue is low",
            queue_white: "You'll be called soon",
            
            calc_title: "Your Commission",
            calc_body: "Character:",
            calc_background: "Background:",
            calc_extras: "Extras:",
            calc_total: "Total:",
            calc_not_selected: "Not selected",
            calc_none: "None",
            calc_request: "Request Commission",
            
            donations: "Donations:",
            or: "or",
            
            // Contact
            contact_title: "Get in Touch",
            contact_subtitle: "Follow me on social media and contact me for commissions",
            nsfw_available: "NSFW Available",
            
            // Footer
            footer_note: "Furry Art with Historical Military Highlights",
            footer_credits: "Made by Sturska",
            
            // Modal
            modal_title: "Request Commission",
            modal_text: "Please contact me through one of these platforms:",
            modal_contact_x: "Contact on X",
            modal_contact_telegram: "Contact on Telegram"
        },
        pt: {
            // Navigation
            nav_home: "Início",
            nav_about: "Sobre Mim",
            nav_gallery: "Trabalhos",
            nav_pricing: "Valores",
            nav_contact: "Contato",
            
            // Translation Button
            translate_button: "Traduzir",
            select_language: "Selecione o Idioma",
            
            // Hero
            hero_subtitle: "Artes com Especialidade em Furrys, Militarismo e Temas Históricos",
            hero_cta: "Tabela de Preços",
            
            // About
            about_title: "Sobre o Artista",
            about_intro: "Seja bem-vindo ao meu universo artístico! Meu nome é Dimitri, mas sou conhecido como PEPI e sou um ilustrador e reencenador histórico da segunda guerra mundial, faço comissões a 6 anos, apaixonado por criar arte furry abordando assuntos históricos, com personagens e temas variados.",
            about_p1: "Trabalho com diversos tipos de arte, desde algo complexo com veículos e multidões até um simples busto, amo trabalhar com assuntos histórico-militares, me aprofundo muito na primeira e segunda guerra mundial, Uniformes militares detalhados, armamento autêntico, cenários atmosféricos e veículos de época - amo trazer a história à vida através de personagens antropomórficos.",
            about_p2: "Seja um ícone de personagem, uma ilustração completa com cenário, ou uma cena elaborada, trabalho tanto em <strong>meio tradicional quanto digital</strong> para dar vida à sua ideia.",
            tag_wwi: "Guerras Mundiais",
            tag_uniforms: "Uniformes Militares",
            tag_vehicles: "Veículos de Época",
            tag_weaponry: "Armamento",
            tag_furry: "Personagens Furry",
            
            // Gallery
            gallery_title: "Conheça meu trabalho",
            gallery_subtitle: "Explore minha variedade de estilos",
            military_title: "Militarismo/História",
            vehicles_title: "Veículos/Padrão",
            
            // Pricing
            pricing_title: "Tabela de Preços",
            pricing_subtitle: "Monte sua encomenda escolhendo tipo e extras",
            pricing_bio: "Aqui você pode montar a sua arte da forma que preferir, sinta-se livre para escolher! Não comercializo arte em progresso, apenas finalizada. Caso tenha alguma dúvida pode me chamar no privado!",
            pricing_body_type: "Tipo de Arte",
            pricing_background_type: "Cenário",
            pricing_extras: "Adicionais",
            
            price_icon_title: "Busto",
            price_icon_desc: "Da cabeça aos ombros",
            price_halfbody_title: "Metade do corpo",
            price_halfbody_desc: "Cabeça até a cintura (obs: caso queira que apareça as coxas do personagem será cobrado como full body por passar da cintura)",
            price_fullbody_title: "Corpo inteiro",
            price_fullbody_desc: "Da cabeça aos pés!",
            price_refsheet_title: "Tabela de Referência",
            price_refsheet_desc: "Tabela de referência seria o personagem de frente, e de costas, membros separados para melhor visualização, paleta de cores organizadas de acordo com a preferência",
            
            price_no_bg: "Padrão",
            price_no_bg_desc: "Fundo transparente ou cor sólida",
            price_normal: "Simples",
            price_normal_desc: "Cenários simples são aqueles que possuem poucos elementos como um pasto, um acampamento, rua de cidade etc",
            price_complex: "Detalhado",
            price_complex_desc: "Cenários detalhados são aqueles que possuem muitos elementos, como veículos, multidões, lugar com diversos itens expostos etc",
            
            extra_bg: "Cenário",
            extra_bg_desc: "No caso de pedir uma HQ ou algo do gênero, e precise ter dois cenários diferentes em uma arte",
            extra_char: "Personagem Adicional",
            extra_char_desc: "No caso de inserir mais um personagem original/OC na arte",
            extra_nsfw_title: "NSFW",
            extra_nsfw_desc: "Conteúdo adulto (+18)",
            
            btn_add: "Adicionar",
            btn_remove: "Remover",
            
            // Queue Status
            queue_label: "Status da Fila:",
            queue_red: "Tem muita gente na fila",
            queue_orange: "A fila está enchendo",
            queue_green: "A fila tá baixa",
            queue_white: "Em pouco tempo você será chamado",
            
            calc_title: "Seu Pedido",
            calc_body: "Personagem:",
            calc_background: "Cenário:",
            calc_extras: "Adicionais:",
            calc_total: "Valor Total:",
            calc_not_selected: "Nada selecionado",
            calc_none: "Nenhum",
            calc_request: "Fazer Pedido",
            
            donations: "Apoie:",
            or: "ou",
            
            // Contact
            contact_title: "Fale Comigo",
            contact_subtitle: "Me siga nas redes e entre em contato para encomendar",
            nsfw_available: "Conteúdo +18 Disponível",
            
            // Footer
            footer_note: "Arte Furry com Foco em Temas Militares Históricos",
            footer_credits: "Feito por Sturska",
            
            // Modal
            modal_title: "Fazer Encomenda",
            modal_text: "Entre em contato através de uma dessas plataformas:",
            modal_contact_x: "Falar no X",
            modal_contact_telegram: "Falar no Telegram"
        },
        el: {
            // Navigation
            nav_home: "Αρχική",
            nav_about: "Για Μένα",
            nav_gallery: "Έργα",
            nav_pricing: "Τιμοκατάλογος",
            nav_contact: "Επικοινωνία",
            
            // Translation Button
            translate_button: "Μετάφραση",
            select_language: "Επιλέξτε Γλώσσα",
            
            // Hero
            hero_subtitle: "Τέχνη με Ειδίκευση σε Furrys, Στρατιωτισμό και Ιστορικά Θέματα",
            hero_cta: "Πίνακας Τιμών",
            
            // About
            about_title: "Για τον Καλλιτέχνη",
            about_intro: "Καλώς ήρθατε στον καλλιτεχνικό μου κόσμο! Το όνομά μου είναι Dimitri, αλλά είμαι γνωστός ως PEPI και είμαι εικονογράφος και αναπαραστάτης ιστορίας του Β' Παγκοσμίου Πολέμου, κάνω αναθέσεις εδώ και 6 χρόνια, με πάθος για τη δημιουργία furry τέχνης που καλύπτει ιστορικά θέματα, με ποικίλους χαρακτήρες και θέματα.",
            about_p1: "Δουλεύω με διάφορους τύπους τέχνης, από κάτι πολύπλοκο με οχήματα και πλήθη μέχρι ένα απλό προτομή, λατρεύω να δουλεύω με ιστορικά-στρατιωτικά θέματα, εμβαθύνω πολύ στον Α' και Β' Παγκόσμιο Πόλεμο, λεπτομερείς στρατιωτικές στολές, αυθεντικά όπλα, ατμοσφαιρικές σκηνές και οχήματα εποχής - λατρεύω να ζωντανεύω την ιστορία μέσα από ανθρωπόμορφους χαρακτήρες.",
            about_p2: "Είτε θέλετε ένα εικονίδιο χαρακτήρα, μια πλήρη εικονογράφηση με σκηνικό, ή μια πολύπλοκη σκηνή, δουλεύω τόσο <strong>παραδοσιακά όσο και ψηφιακά</strong> για να δώσω ζωή στην ιδέα σας.",
            tag_wwi: "Παγκόσμιοι Πόλεμοι",
            tag_uniforms: "Στρατιωτικές Στολές",
            tag_vehicles: "Ιστορικά Οχήματα",
            tag_weaponry: "Όπλα",
            tag_furry: "Furry Χαρακτήρες",
            
            // Gallery
            gallery_title: "Δείτε τη δουλειά μου",
            gallery_subtitle: "Εξερευνήστε την ποικιλία των στυλ μου",
            military_title: "Στρατιωτισμός/Ιστορία",
            vehicles_title: "Οχήματα/Στάνταρ",
            
            // Pricing
            pricing_title: "Τιμοκατάλογος",
            pricing_subtitle: "Φτιάξτε την παραγγελία σας επιλέγοντας τύπο και extras",
            pricing_bio: "Εδώ μπορείτε να φτιάξετε την τέχνη σας όπως προτιμάτε, νιώστε ελεύθεροι να επιλέξετε! Δεν πουλάω έργα σε εξέλιξη, μόνο ολοκληρωμένη τέχνη. Αν έχετε οποιαδήποτε ερώτηση, μη διστάσετε να επικοινωνήσετε μαζί μου ιδιωτικά!",
            pricing_body_type: "Τύπος Τέχνης",
            pricing_background_type: "Σκηνικό",
            pricing_extras: "Επιπλέον",
            
            price_icon_title: "Προτομή",
            price_icon_desc: "Από το κεφάλι στους ώμους",
            price_halfbody_title: "Μισό Σώμα",
            price_halfbody_desc: "Κεφάλι μέχρι τη μέση (σημ: αν θέλετε να φαίνονται οι μηροί του χαρακτήρα, θα χρεωθεί ως πλήρες σώμα καθώς ξεπερνά τη μέση)",
            price_fullbody_title: "Πλήρες Σώμα",
            price_fullbody_desc: "Από το κεφάλι στα πόδια!",
            price_refsheet_title: "Φύλλο Αναφοράς",
            price_refsheet_desc: "Το φύλλο αναφοράς θα είναι ο χαρακτήρας από μπροστά και πίσω, χωριστά μέλη για καλύτερη οπτικοποίηση, παλέτα χρωμάτων οργανωμένη σύμφωνα με την προτίμηση",
            
            price_no_bg: "Στάνταρ",
            price_no_bg_desc: "Διαφανές ή μονόχρωμο φόντο",
            price_normal: "Απλό",
            price_normal_desc: "Απλά σκηνικά είναι αυτά με λίγα στοιχεία όπως ένα λιβάδι, μια κατασκήνωση, δρόμος πόλης κ.λπ.",
            price_complex: "Λεπτομερές",
            price_complex_desc: "Λεπτομερή σκηνικά είναι αυτά με πολλά στοιχεία, όπως οχήματα, πλήθη, μέρη με διάφορα εκτεθειμένα αντικείμενα κ.λπ.",
            
            extra_bg: "Σκηνικό",
            extra_bg_desc: "Σε περίπτωση παραγγελίας κόμικ ή κάτι παρόμοιο, και χρειάζεται να έχει δύο διαφορετικά σκηνικά σε μια τέχνη",
            extra_char: "Επιπλέον Χαρακτήρας",
            extra_char_desc: "Σε περίπτωση εισαγωγής άλλου πρωτότυπου χαρακτήρα/OC στην τέχνη",
            extra_nsfw_title: "NSFW",
            extra_nsfw_desc: "Περιεχόμενο +18",
            
            btn_add: "Πρόσθεσε",
            btn_remove: "Αφαίρεσε",
            
            // Queue Status
            queue_label: "Κατάσταση Ουράς:",
            queue_red: "Η ουρά είναι πολύ γεμάτη",
            queue_orange: "Η ουρά γεμίζει",
            queue_green: "Η ουρά είναι χαμηλή",
            queue_white: "Θα κληθείτε σύντομα",
            
            calc_title: "Η Παραγγελία σου",
            calc_body: "Χαρακτήρας:",
            calc_background: "Σκηνικό:",
            calc_extras: "Επιπλέον:",
            calc_total: "Συνολικό Κόστος:",
            calc_not_selected: "Τίποτα επιλεγμένο",
            calc_none: "Κανένα",
            calc_request: "Κάνε Παραγγελία",
            
            donations: "Υποστήριξη:",
            or: "ή",
            
            // Contact
            contact_title: "Επικοινωνία",
            contact_subtitle: "Ακολούθησέ με στα social media και στείλε μήνυμα για παραγγελίες",
            nsfw_available: "Διαθέσιμο Περιεχόμενο +18",
            
            // Footer
            footer_note: "Furry Τέχνη με Εστίαση σε Ιστορικά Στρατιωτικά Θέματα",
            footer_credits: "Φτιαγμένο από τον Sturska",
            
            // Modal
            modal_title: "Κάνε Παραγγελία",
            modal_text: "Επικοινώνησε μαζί μου μέσω μιας από αυτές τις πλατφόρμες:",
            modal_contact_x: "Μίλησε στο X",
            modal_contact_telegram: "Μίλησε στο Telegram"
        },
        de: {
            // Navigation
            nav_home: "Startseite",
            nav_about: "Über mich",
            nav_gallery: "Galerie",
            nav_pricing: "Preise",
            nav_contact: "Kontakt",
            
            // Translation Button
            translate_button: "Übersetzen",
            select_language: "Sprache wählen",
            
            // Hero
            hero_subtitle: "Kunst mit Spezialisierung auf Furrys, Militarismus und Historische Themen",
            hero_cta: "Preistabelle",
            
            // About
            about_title: "Über den Künstler",
            about_intro: "Willkommen in meinem künstlerischen Universum! Mein Name ist Dimitri, aber ich bin als PEPI bekannt und ich bin Illustrator und Zweiter-Weltkrieg-Geschichtsdarsteller, ich mache seit 6 Jahren Auftragsarbeiten, mit Leidenschaft für die Erstellung von Furry-Kunst zu historischen Themen, mit verschiedenen Charakteren und Themen.",
            about_p1: "Ich arbeite mit verschiedenen Arten von Kunst, von komplexen Szenen mit Fahrzeugen und Menschenmengen bis hin zu einer einfachen Büste, ich liebe es, mit historisch-militärischen Themen zu arbeiten, ich vertiefe mich sehr in den Ersten und Zweiten Weltkrieg, detaillierte Militäruniformen, authentische Waffen, atmosphärische Szenen und historische Fahrzeuge - ich liebe es, Geschichte durch anthropomorphe Charaktere zum Leben zu erwecken.",
            about_p2: "Ob Icon, vollständige Illustration mit Hintergrund oder komplexe Szene - ich arbeite sowohl <strong>traditionell als auch digital</strong>, um deine Idee zum Leben zu erwecken.",
            tag_wwi: "Weltkriegsthemen",
            tag_uniforms: "Militäruniformen",
            tag_vehicles: "Historische Fahrzeuge",
            tag_weaponry: "Waffen",
            tag_furry: "Furry-Charaktere",
            
            // Gallery
            gallery_title: "Meine Arbeiten",
            gallery_subtitle: "Entdecke meine Stilvielfalt",
            military_title: "Militarismus/Geschichte",
            vehicles_title: "Fahrzeuge/Standard",
            
            // Pricing
            pricing_title: "Preisliste",
            pricing_subtitle: "Stelle deinen Auftrag zusammen",
            pricing_bio: "Hier kannst du deine Kunst so gestalten, wie du es bevorzugst, fühl dich frei zu wählen! Ich verkaufe keine laufenden Arbeiten, nur fertige Kunst. Wenn du Fragen hast, kontaktiere mich gerne privat!",
            pricing_body_type: "Kunsttyp",
            pricing_background_type: "Hintergrund",
            pricing_extras: "Zusätzlich",
            
            price_icon_title: "Büste",
            price_icon_desc: "Vom Kopf bis zu den Schultern",
            price_halfbody_title: "Halber Körper",
            price_halfbody_desc: "Kopf bis Taille (Hinweis: wenn die Oberschenkel des Charakters zu sehen sein sollen, wird es als Ganzkörper berechnet, da es über die Taille hinausgeht)",
            price_fullbody_title: "Ganzer Körper",
            price_fullbody_desc: "Vom Kopf bis zu den Füßen!",
            price_refsheet_title: "Referenzblatt",
            price_refsheet_desc: "Referenzblatt wäre der Charakter von vorne und hinten, getrennte Gliedmaßen für bessere Visualisierung, Farbpalette nach Präferenz organisiert",
            
            price_no_bg: "Standard",
            price_no_bg_desc: "Transparenter oder einfarbiger Hintergrund",
            price_normal: "Einfach",
            price_normal_desc: "Einfache Hintergründe sind solche mit wenigen Elementen wie eine Wiese, ein Lager, eine Stadtstraße usw.",
            price_complex: "Detailliert",
            price_complex_desc: "Detaillierte Hintergründe sind solche mit vielen Elementen wie Fahrzeugen, Menschenmengen, Orte mit verschiedenen ausgestellten Gegenständen usw.",
            
            extra_bg: "Hintergrund",
            extra_bg_desc: "Falls ein Comic oder etwas Ähnliches bestellt wird und zwei verschiedene Hintergründe in einem Kunstwerk benötigt werden",
            extra_char: "Zusätzlicher Charakter",
            extra_char_desc: "Falls ein weiterer Original-Charakter/OC in die Kunst eingefügt wird",
            extra_nsfw_title: "NSFW",
            extra_nsfw_desc: "Erwachseneninhalte (+18)",
            
            btn_add: "Hinzufügen",
            btn_remove: "Entfernen",
            
            // Queue Status
            queue_label: "Warteschlangenstatus:",
            queue_red: "Die Warteschlange ist sehr voll",
            queue_orange: "Die Warteschlange füllt sich",
            queue_green: "Die Warteschlange ist niedrig",
            queue_white: "Sie werden bald aufgerufen",
            
            calc_title: "Deine Bestellung",
            calc_body: "Charakter:",
            calc_background: "Hintergrund:",
            calc_extras: "Zusätzlich:",
            calc_total: "Gesamtpreis:",
            calc_not_selected: "Nicht ausgewählt",
            calc_none: "Keine",
            calc_request: "Auftrag anfragen",
            
            donations: "Unterstützung:",
            or: "oder",
            
            // Contact
            contact_title: "Kontakt",
            contact_subtitle: "Folge mir auf Social Media und kontaktiere mich für Aufträge",
            nsfw_available: "+18 Inhalte verfügbar",
            
            // Footer
            footer_note: "Furry-Kunst mit Fokus auf historische Militärthemen",
            footer_credits: "Erstellt von Sturska",
            
            // Modal
            modal_title: "Auftrag anfragen",
            modal_text: "Kontaktiere mich über eine dieser Plattformen:",
            modal_contact_x: "Auf X kontaktieren",
            modal_contact_telegram: "Auf Telegram kontaktieren"
        },
        es: {
            // Navigation
            nav_home: "Inicio",
            nav_about: "Sobre mí",
            nav_gallery: "Galería",
            nav_pricing: "Precios",
            nav_contact: "Contacto",
            
            // Translation Button
            translate_button: "Traducir",
            select_language: "Seleccionar Idioma",
            
            // Hero
            hero_subtitle: "Arte con Especialidad en Furrys, Militarismo y Temas Históricos",
            hero_cta: "Tabla de Precios",
            
            // About
            about_title: "Sobre el artista",
            about_intro: "¡Bienvenido a mi universo artístico! Mi nombre es Dimitri, pero soy conocido como PEPI y soy ilustrador y recreador histórico de la Segunda Guerra Mundial, hago comisiones desde hace 6 años, apasionado por crear arte furry abordando temas históricos, con personajes y temas variados.",
            about_p1: "Trabajo con varios tipos de arte, desde algo complejo con vehículos y multitudes hasta un simple busto, me encanta trabajar con temas histórico-militares, me profundizo mucho en la Primera y Segunda Guerra Mundial, uniformes militares detallados, armamento auténtico, escenas atmosféricas y vehículos de época - me encanta dar vida a la historia a través de personajes antropomórficos.",
            about_p2: "Ya sea un icono de personaje, una ilustración completa con fondo, o una escena compleja, trabajo tanto en <strong>medios tradicionales como digitales</strong> para dar vida a tu idea.",
            tag_wwi: "Guerras Mundiales",
            tag_uniforms: "Uniformes Militares",
            tag_vehicles: "Vehículos Históricos",
            tag_weaponry: "Armamento",
            tag_furry: "Personajes Furry",
            
            // Gallery
            gallery_title: "Conoce mi trabajo",
            gallery_subtitle: "Descubre mi variedad de estilos",
            military_title: "Militarismo/Historia",
            vehicles_title: "Vehículos/Estándar",
            
            // Pricing
            pricing_title: "Lista de precios",
            pricing_subtitle: "Arma tu encargo eligiendo tipo y extras",
            pricing_bio: "¡Aquí puedes armar tu arte de la forma que prefieras, siéntete libre de elegir! No comercializo arte en progreso, solo finalizada. ¡Si tienes alguna duda puedes contactarme en privado!",
            pricing_body_type: "Tipo de arte",
            pricing_background_type: "Fondo",
            pricing_extras: "Adicionales",
            
            price_icon_title: "Busto",
            price_icon_desc: "De la cabeza a los hombros",
            price_halfbody_title: "Medio cuerpo",
            price_halfbody_desc: "Cabeza hasta la cintura (nota: si quieres que se vean los muslos del personaje, se cobrará como cuerpo completo por pasar de la cintura)",
            price_fullbody_title: "Cuerpo completo",
            price_fullbody_desc: "¡De la cabeza a los pies!",
            price_refsheet_title: "Hoja de Referencia",
            price_refsheet_desc: "La hoja de referencia sería el personaje de frente y de espaldas, miembros separados para mejor visualización, paleta de colores organizada según preferencia",
            
            price_no_bg: "Estándar",
            price_no_bg_desc: "Fondo transparente o color sólido",
            price_normal: "Simple",
            price_normal_desc: "Fondos simples son aquellos que poseen pocos elementos como un pasto, un campamento, calle de ciudad etc",
            price_complex: "Detallado",
            price_complex_desc: "Fondos detallados son aquellos que poseen muchos elementos, como vehículos, multitudes, lugar con diversos ítems expuestos etc",
            
            extra_bg: "Fondo",
            extra_bg_desc: "En caso de pedir un cómic o algo del género, y necesite tener dos fondos diferentes en un arte",
            extra_char: "Personaje Adicional",
            extra_char_desc: "En caso de insertar más un personaje original/OC en el arte",
            extra_nsfw_title: "NSFW",
            extra_nsfw_desc: "Contenido adulto (+18)",
            
            btn_add: "Añadir",
            btn_remove: "Quitar",
            
            // Queue Status
            queue_label: "Estado de la Cola:",
            queue_red: "Hay mucha gente en la cola",
            queue_orange: "La cola se está llenando",
            queue_green: "La cola está baja",
            queue_white: "Serás llamado pronto",
            
            calc_title: "Tu pedido",
            calc_body: "Personaje:",
            calc_background: "Fondo:",
            calc_extras: "Adicionales:",
            calc_total: "Precio total:",
            calc_not_selected: "No seleccionado",
            calc_none: "Ninguno",
            calc_request: "Hacer pedido",
            
            donations: "Apoyo:",
            or: "o",
            
            // Contact
            contact_title: "Contacto",
            contact_subtitle: "Sígueme en redes sociales y contáctame para encargos",
            nsfw_available: "Contenido +18 disponible",
            
            // Footer
            footer_note: "Arte Furry con enfoque en temas militares históricos",
            footer_credits: "Hecho por Sturska",
            
            // Modal
            modal_title: "Hacer pedido",
            modal_text: "Contáctame a través de una de estas plataformas:",
            modal_contact_x: "Contactar en X",
            modal_contact_telegram: "Contactar en Telegram"
        },
        ru: {
            // Navigation
            nav_home: "Главная",
            nav_about: "Обо мне",
            nav_gallery: "Галерея",
            nav_pricing: "Цены",
            nav_contact: "Контакты",
            
            // Translation Button
            translate_button: "Перевести",
            select_language: "Выберите язык",
            
            // Hero
            hero_subtitle: "Искусство со специализацией на Фурри, Милитаризме и Исторических Темах",
            hero_cta: "Таблица Цен",
            
            // About
            about_title: "О художнике",
            about_intro: "Добро пожаловать в мой художественный мир! Меня зовут Димитри, но я известен как PEPI, я иллюстратор и реконструктор истории Второй мировой войны, занимаюсь комиссиями уже 6 лет, увлечен созданием фурри-арта на исторические темы, с разнообразными персонажами и темами.",
            about_p1: "Я работаю с различными видами искусства, от сложных сцен с техникой и толпами до простого бюста, я люблю работать с военно-историческими темами, глубоко погружаюсь в Первую и Вторую мировые войны, детализированные военные формы, аутентичное оружие, атмосферные сцены и техника той эпохи - мне нравится оживлять историю через антропоморфных персонажей.",
            about_p2: "Будь то иконка персонажа, полная иллюстрация с фоном или сложная сцена, я работаю как в <strong>традиционной, так и в цифровой технике</strong>, чтобы воплотить вашу идею в жизнь.",
            tag_wwi: "Мировые войны",
            tag_uniforms: "Военная форма",
            tag_vehicles: "Историческая техника",
            tag_weaponry: "Оружие",
            tag_furry: "Фурри-персонажи",
            
            // Gallery
            gallery_title: "Мои работы",
            gallery_subtitle: "Посмотрите разнообразие моих стилей",
            military_title: "Милитаризм/История",
            vehicles_title: "Транспорт/Стандарт",
            
            // Pricing
            pricing_title: "Прайс-лист",
            pricing_subtitle: "Составьте свой заказ, выбрав тип и дополнения",
            pricing_bio: "Здесь вы можете создать свой арт так, как предпочитаете, не стесняйтесь выбирать! Я не продаю работы в процессе, только готовый арт. Если у вас есть вопросы, свяжитесь со мной в личку!",
            pricing_body_type: "Тип работы",
            pricing_background_type: "Фон",
            pricing_extras: "Дополнительно",
            
            price_icon_title: "Бюст",
            price_icon_desc: "От головы до плеч",
            price_halfbody_title: "Половина тела",
            price_halfbody_desc: "Голова до талии (примечание: если вы хотите, чтобы были видны бедра персонажа, это будет считаться как полное тело, так как выходит за пределы талии)",
            price_fullbody_title: "Полное тело",
            price_fullbody_desc: "От головы до ног!",
            price_refsheet_title: "Референс-лист",
            price_refsheet_desc: "Референс-лист будет включать персонажа спереди и сзади, отдельные конечности для лучшей визуализации, цветовую палитру, организованную в соответствии с предпочтениями",
            
            price_no_bg: "Стандартный",
            price_no_bg_desc: "Прозрачный или однотонный фон",
            price_normal: "Простой",
            price_normal_desc: "Простые фоны - это те, которые имеют мало элементов, таких как луг, лагерь, городская улица и т.д.",
            price_complex: "Детальный",
            price_complex_desc: "Детальные фоны - это те, которые имеют много элементов, таких как транспорт, толпы, места с различными выставленными предметами и т.д.",
            
            extra_bg: "Фон",
            extra_bg_desc: "В случае заказа комикса или чего-то подобного, и нужно иметь два разных фона в одном арте",
            extra_char: "Дополнительный персонаж",
            extra_char_desc: "В случае добавления еще одного оригинального персонажа/OC в арт",
            extra_nsfw_title: "NSFW",
            extra_nsfw_desc: "Контент 18+",
            
            btn_add: "Добавить",
            btn_remove: "Убрать",
            
            // Queue Status
            queue_label: "Статус Очереди:",
            queue_red: "В очереди очень много людей",
            queue_orange: "Очередь заполняется",
            queue_green: "Очередь небольшая",
            queue_white: "Вас вызовут скоро",
            
            calc_title: "Ваш заказ",
            calc_body: "Персонаж:",
            calc_background: "Фон:",
            calc_extras: "Дополнительно:",
            calc_total: "Итоговая цена:",
            calc_not_selected: "Не выбрано",
            calc_none: "Нет",
            calc_request: "Сделать заказ",
            
            donations: "Поддержка:",
            or: "или",
            
            // Contact
            contact_title: "Контакты",
            contact_subtitle: "Подписывайтесь на меня в соцсетях и связывайтесь для заказов",
            nsfw_available: "Контент 18+ доступен",
            
            // Footer
            footer_note: "Фурри-арт с акцентом на исторические военные темы",
            footer_credits: "Создано Sturska",
            
            // Modal
            modal_title: "Сделать заказ",
            modal_text: "Свяжитесь со мной через одну из этих платформ:",
            modal_contact_x: "Связаться в X",
            modal_contact_telegram: "Связаться в Telegram"
        }
    };
    
    let currentLanguage = 'en';
    
    // Function to change language
    function changeLanguage(lang) {
        currentLanguage = lang;
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        
        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        
        // Update queue status message for current language
        const queueIndicator = document.getElementById('queueIndicator');
        if (queueIndicator) {
            const currentStatus = queueIndicator.getAttribute('data-status');
            const queueMessage = queueIndicator.querySelector('.queue-message');
            if (queueMessage && currentStatus) {
                const translationKey = `queue_${currentStatus}`;
                if (translations[lang][translationKey]) {
                    queueMessage.textContent = translations[lang][translationKey];
                }
            }
        }
        
        // Store preference
        localStorage.setItem('preferred-language', lang);
    }
    
    // ========== TRANSLATION BUTTON ==========
    function initTranslationSystem() {
        console.log('=== INITIALIZING TRANSLATION SYSTEM ===');
        
        const translateBtn = document.getElementById('translateBtn');
        const languageDropdown = document.getElementById('languageDropdown');
        
        if (!translateBtn || !languageDropdown) {
            console.error('Translation elements not found');
            return;
        }
        
        console.log('✅ Translation elements found');
        
        // Toggle dropdown function
        function toggleDropdown() {
            const isOpen = languageDropdown.classList.contains('active');
            
            if (isOpen) {
                languageDropdown.classList.remove('active');
                translateBtn.classList.remove('active');
            } else {
                languageDropdown.classList.add('active');
                translateBtn.classList.add('active');
            }
        }
        
        // Close dropdown function
        function closeDropdown() {
            languageDropdown.classList.remove('active');
            translateBtn.classList.remove('active');
        }
        
        // Button click event
        translateBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleDropdown();
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!languageDropdown.contains(e.target) && e.target !== translateBtn) {
                closeDropdown();
            }
        });
        
        // Language selection events
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                console.log('Language selected:', lang);
                changeLanguage(lang);
                
                // Update active state
                document.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                // Close dropdown
                closeDropdown();
            });
        });
        
        // Load saved language preference
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && translations[savedLang]) {
            changeLanguage(savedLang);
            
            // Set active state
            document.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
            const activeOption = document.querySelector(`[data-lang="${savedLang}"]`);
            if (activeOption) {
                activeOption.classList.add('active');
            }
        }
        
        console.log('✅ Translation system initialized');
    }
    
    // Initialize translation system
    initTranslationSystem();
    
    
    // ========== NAVIGATION ==========
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== CURRENCY SELECTOR ==========
    let currentCurrency = 'usd';
    const currencyButtons = document.querySelectorAll('.currency-btn');
    const prices = document.querySelectorAll('.price');
    
    currencyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            currencyButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current currency
            currentCurrency = this.getAttribute('data-currency');
            
            // Update all prices
            updatePrices();
            
            // Recalculate total
            calculateTotal();
        });
    });
    
    function updatePrices() {
        prices.forEach(price => {
            const usdPrice = price.getAttribute('data-usd');
            const brlPrice = price.getAttribute('data-brl');
            
            if (currentCurrency === 'usd') {
                price.textContent = `$${usdPrice}`;
            } else {
                price.textContent = `R$${brlPrice}`;
            }
        });
    }
    
    // ========== PRICING CALCULATOR ==========
    let selectedBody = null;
    let selectedBodyPrice = 0;
    let selectedBackground = null;
    let selectedBackgroundPrice = 0;
    let selectedExtras = [];
    
    const bodyItems = document.querySelectorAll('[data-type="body"]');
    const backgroundItems = document.querySelectorAll('[data-type="background"]');
    const extraItems = document.querySelectorAll('[data-type="extra"]');
    
    // Body type selection
    bodyItems.forEach(item => {
        const button = item.querySelector('.select-btn');
        button.addEventListener('click', function() {
            // Remove selected class from all body items
            bodyItems.forEach(i => i.classList.remove('selected'));
            
            // Add selected class to clicked item
            item.classList.add('selected');
            
            // Update selected body
            selectedBody = item.getAttribute('data-value');
            
            // Get price based on currency
            const priceElement = item.querySelector('.price');
            const usdPrice = parseFloat(priceElement.getAttribute('data-usd'));
            const brlPrice = parseFloat(priceElement.getAttribute('data-brl'));
            
            selectedBodyPrice = currentCurrency === 'usd' ? usdPrice : brlPrice;
            
            // Update calculator display
            const bodyName = item.querySelector('h4').textContent;
            document.getElementById('selected-body').textContent = bodyName;
            
            // Recalculate total
            calculateTotal();
        });
    });
    
    // Background type selection
    backgroundItems.forEach(item => {
        const button = item.querySelector('.select-btn');
        button.addEventListener('click', function() {
            // Remove selected class from all background items
            backgroundItems.forEach(i => i.classList.remove('selected'));
            
            // Add selected class to clicked item
            item.classList.add('selected');
            
            // Update selected background
            selectedBackground = item.getAttribute('data-value');
            
            // Get price based on currency
            const priceElement = item.querySelector('.price');
            const usdPrice = parseFloat(priceElement.getAttribute('data-usd'));
            const brlPrice = parseFloat(priceElement.getAttribute('data-brl'));
            
            selectedBackgroundPrice = currentCurrency === 'usd' ? usdPrice : brlPrice;
            
            // Update calculator display
            const backgroundName = item.querySelector('h4').textContent;
            document.getElementById('selected-background').textContent = backgroundName;
            
            // Recalculate total
            calculateTotal();
        });
    });
    
    // Extras selection
    let characterCount = 1;
    
    extraItems.forEach(item => {
        const button = item.querySelector('.toggle-btn');
        const extraValue = item.getAttribute('data-value');
        
        // Setup character counter
        if (extraValue === 'character') {
            const counter = item.querySelector('.character-counter');
            const counterValue = counter.querySelector('.counter-value');
            const minusBtn = counter.querySelector('.minus-btn');
            const plusBtn = counter.querySelector('.plus-btn');
            
            minusBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                if (characterCount > 1) {
                    characterCount--;
                    counterValue.textContent = characterCount;
                    calculateTotal();
                }
            });
            
            plusBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                characterCount++;
                counterValue.textContent = characterCount;
                calculateTotal();
            });
        }
        
        button.addEventListener('click', function() {
            const extraName = item.querySelector('h4').textContent;
            
            // Toggle selected class
            item.classList.toggle('selected');
            
            // Show/hide counter for characters
            if (extraValue === 'character') {
                const counter = item.querySelector('.character-counter');
                if (item.classList.contains('selected')) {
                    counter.style.display = 'flex';
                } else {
                    counter.style.display = 'none';
                    characterCount = 1;
                    counter.querySelector('.counter-value').textContent = '1';
                }
            }
            
            // Update selected extras array
            if (item.classList.contains('selected')) {
                // For NSFW, get the fixed price
                if (extraValue === 'nsfw') {
                    const priceElement = item.querySelector('.price');
                    const usdPrice = parseFloat(priceElement.getAttribute('data-usd'));
                    const brlPrice = parseFloat(priceElement.getAttribute('data-brl'));
                    selectedExtras.push({
                        name: extraName,
                        value: extraValue,
                        fixedPrice: currentCurrency === 'usd' ? usdPrice : brlPrice
                    });
                } else {
                    selectedExtras.push({
                        name: extraName,
                        value: extraValue,
                        percentage: extraValue === 'background' ? 0.5 : 0.65,
                        count: extraValue === 'character' ? characterCount : 1
                    });
                }
                // Update button text with translation
                button.setAttribute('data-translate', 'btn_remove');
                button.textContent = translations[currentLanguage].btn_remove;
            } else {
                selectedExtras = selectedExtras.filter(e => e.value !== extraValue);
                // Update button text with translation
                button.setAttribute('data-translate', 'btn_add');
                button.textContent = translations[currentLanguage].btn_add;
            }
            
            // Update calculator display
            if (selectedExtras.length > 0) {
                const extrasText = selectedExtras.map(e => {
                    if (e.value === 'character' && characterCount > 1) {
                        return `${e.name} (${characterCount})`;
                    }
                    return e.name;
                }).join(', ');
                document.getElementById('selected-extras').textContent = extrasText;
            } else {
                document.getElementById('selected-extras').textContent = translations[currentLanguage].calc_none;
            }
            
            // Recalculate total
            calculateTotal();
        });
    });
    
    // Calculate total price
    function calculateTotal() {
        if (selectedBody === null) {
            document.getElementById('total-price').textContent = currentCurrency === 'usd' ? '$0' : 'R$0';
            return;
        }
        
        let total = selectedBodyPrice;
        
        // Add background price if selected
        if (selectedBackground !== null && selectedBackground !== 'none') {
            total += selectedBackgroundPrice;
        }
        
        // Calculate extras
        let extrasTotal = 0;
        selectedExtras.forEach(extra => {
            if (extra.value === 'nsfw') {
                // NSFW is a fixed price
                extrasTotal += extra.fixedPrice;
            } else if (extra.value === 'background') {
                // Extra background is 50% of background price
                extrasTotal += selectedBackgroundPrice * extra.percentage;
            } else if (extra.value === 'character') {
                // Extra character is 65% of body price per character
                extrasTotal += selectedBodyPrice * extra.percentage * characterCount;
            }
        });
        
        total += extrasTotal;
        
        // Format and display total
        const formattedTotal = total.toFixed(0);
        const currencySymbol = currentCurrency === 'usd' ? '$' : 'R$';
        document.getElementById('total-price').textContent = `${currencySymbol}${formattedTotal}`;
    }
    
    // ========== CONTACT MODAL ==========
    const modal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close');
    
    // Function to open modal
    window.openContactModal = function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // Close modal when clicking X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // ========== GALLERY ANIMATIONS ==========
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Intersection Observer for gallery items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    galleryItems.forEach(item => {
        observer.observe(item);
    });
    
    // ========== SCROLL EFFECTS ==========
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(20, 20, 20, 0.98)';
        } else {
            navbar.style.background = 'rgba(20, 20, 20, 0.95)';
        }
    });
    
    // ========== SECTION ANIMATIONS ==========
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(section);
    });
    
    // ========== HERO SECTION ==========
    // Reset hero section animations
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
    
    // ========== COPY TO CLIPBOARD ==========
    // Add click to copy functionality for Discord username
    const discordCard = document.querySelector('.social-card.discord');
    if (discordCard) {
        discordCard.style.cursor = 'pointer';
        discordCard.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Copy Discord username to clipboard
            const discordUsername = 'pepi7561';
            navigator.clipboard.writeText(discordUsername).then(function() {
                // Show feedback
                const originalText = discordCard.querySelector('p').textContent;
                discordCard.querySelector('p').textContent = 'Copied to clipboard!';
                
                // Reset after 2 seconds
                setTimeout(function() {
                    discordCard.querySelector('p').textContent = originalText;
                }, 2000);
            }).catch(function(err) {
                console.error('Failed to copy: ', err);
            });
        });
    }
    
    // ========== KEYBOARD SHORTCUTS ==========
    document.addEventListener('keydown', function(e) {
        // Close modal with ESC key
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // ========== PARALLAX EFFECT ==========
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // ========== SMOOTH SCROLL TO TOP ==========
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--gold);
        color: var(--black);
        border: 3px solid var(--brass);
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.background = 'var(--brass)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.background = 'var(--gold)';
    });
    
    // ========== PRELOAD IMAGES ==========
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        }
    });
    
    // ========== IMAGE LIGHTBOX ==========
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    const galleryImages = document.querySelectorAll('.gallery-item img');
    let currentImageIndex = 0;
    let imagesArray = Array.from(galleryImages);
    
    console.log('Lightbox elements:', { lightbox, lightboxImg, lightboxClose, lightboxPrev, lightboxNext });
    console.log('Gallery images found:', galleryImages.length);
    
    // Open lightbox when clicking on gallery image
    galleryImages.forEach((img, index) => {
        img.parentElement.addEventListener('click', function() {
            console.log('Gallery image clicked:', index);
            currentImageIndex = index;
            openLightbox(img.src);
        });
    });
    
    function openLightbox(src) {
        if (lightbox && lightboxImg) {
            lightbox.style.display = 'block';
            lightboxImg.src = src;
            document.body.style.overflow = 'hidden';
            console.log('Lightbox opened:', src);
        }
    }
    
    function closeLightbox() {
        if (lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
            console.log('Lightbox closed');
        }
    }
    
    function showNextImage() {
        if (imagesArray.length > 0 && lightboxImg) {
            currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
            lightboxImg.src = imagesArray[currentImageIndex].src;
            console.log('Next image:', currentImageIndex);
        }
    }
    
    function showPrevImage() {
        if (imagesArray.length > 0 && lightboxImg) {
            currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
            lightboxImg.src = imagesArray[currentImageIndex].src;
            console.log('Previous image:', currentImageIndex);
        }
    }
    
    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    // Navigation buttons
    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }
    
    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox && lightbox.style.display === 'block') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        }
    });
    
    // ========== QUEUE STATUS MANAGEMENT ==========
    // ⚠️ CHANGE THIS VARIABLE TO UPDATE QUEUE STATUS ⚠️
    // Valid values: 'red', 'orange', 'green', 'white'
    const QUEUE_STATUS = 'orange';  // <-- CHANGE THIS VALUE TO UPDATE THE QUEUE STATUS
    
    function updateQueueStatus(status) {
        const queueIndicator = document.getElementById('queueIndicator');
        const queueMessage = queueIndicator.querySelector('.queue-message');
        
        // Update the data-status attribute
        queueIndicator.setAttribute('data-status', status);
        
        // Update the translation key based on status
        const translationKey = `queue_${status}`;
        queueMessage.setAttribute('data-translate', translationKey);
        queueMessage.textContent = translations[currentLanguage][translationKey];
    }
    
    // Set initial queue status
    updateQueueStatus(QUEUE_STATUS);
    
    // ========== INITIAL SETUP ==========
    console.log('🌿 Pepe (Fur Pepi) Website Loaded Successfully!');
    console.log('🎨 Furry Art with Historical Military Highlights');
    console.log('🌍 Multi-language support: EN, PT, EL, DE, ES, RU');
    console.log('📧 Contact: dimitri.souza.papaioannou@gmail.com');
    
}

// Initialize website when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWebsite);
} else {
    initWebsite();
}