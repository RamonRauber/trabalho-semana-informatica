// Banco de questões ampliado (130 questões)
const questionBank = [
    {
        question: "O que significa a sigla 'CPU'?",
        options: [
            "Computador Pessoal de Uso",
            "Central Processing Unit",
            "Controle de Processos Urgentes",
            "Computador Portátil Universal"
        ],
        correct: 1
    },
    {
        question: "Qual destes NÃO é um sistema operacional?",
        options: [
            "Windows",
            "Linux",
            "Microsoft Word",
            "macOS"
        ],
        correct: 2
    },
    {
        question: "Quantos bits formam um byte?",
        options: [
            "4 bits",
            "8 bits",
            "16 bits",
            "32 bits"
        ],
        correct: 1
    },
    {
        question: "O que é um 'URL'?",
        options: [
            "Um programa de computador",
            "Um tipo de hardware",
            "O endereço de um site na internet",
            "Um protocolo de segurança"
        ],
        correct: 2
    },
    {
        question: "Qual destes é um navegador de internet?",
        options: [
            "Photoshop",
            "Excel",
            "Google Chrome",
            "PowerPoint"
        ],
        correct: 2
    },
    {
        question: "O que significa 'HTML'?",
        options: [
            "HyperText Markup Language",
            "HighTech Modern Language",
            "Hyper Transfer Modern Language",
            "HighText Machine Language"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema Android?",
        options: [
            "Apple",
            "Microsoft",
            "Google",
            "IBM"
        ],
        correct: 2
    },
    {
        question: "O que é um 'firewall'?",
        options: [
            "Um dispositivo de armazenamento",
            "Um sistema de segurança de rede",
            "Um tipo de monitor",
            "Um programa de edição de texto"
        ],
        correct: 1
    },
    {
        question: "Qual destes é um dispositivo de entrada?",
        options: [
            "Monitor",
            "Impressora",
            "Teclado",
            "Caixas de som"
        ],
        correct: 2
    },
    {
        question: "O que significa 'PDF'?",
        options: [
            "Printable Document Format",
            "Portable Document Format",
            "Personal Data File",
            "Public Document Form"
        ],
        correct: 1
    },
    {
        question: "Qual linguagem de programação é conhecida por ser usada para desenvolvimento web front-end?",
        options: [
            "Python",
            "Java",
            "HTML",
            "C++"
        ],
        correct: 2
    },
    {
        question: "O que é um 'bug' em computação?",
        options: [
            "Um tipo de antivírus",
            "Um erro ou defeito em um software",
            "Um dispositivo de hardware",
            "Um tipo de algoritmo"
        ],
        correct: 1
    },
    {
        question: "Qual destes é um banco de dados relacional popular?",
        options: [
            "MongoDB",
            "MySQL",
            "Redis",
            "Elasticsearch"
        ],
        correct: 1
    },
    {
        question: "O que significa a sigla 'RAM'?",
        options: [
            "Random Access Memory",
            "Readily Available Memory",
            "Rapid Access Module",
            "Random Allocation Memory"
        ],
        correct: 0
    },
    {
        question: "Qual destes NÃO é um protocolo de internet?",
        options: [
            "HTTP",
            "FTP",
            "HTML",
            "TCP"
        ],
        correct: 2
    },
    {
        question: "O que é um 'cookie' na web?",
        options: [
            "Um tipo de vírus",
            "Um pequeno arquivo de dados armazenado no navegador",
            "Um protocolo de segurança",
            "Um tipo de hardware"
        ],
        correct: 1
    },
    {
        question: "Qual empresa criou o sistema operacional Windows?",
        options: [
            "Apple",
            "Google",
            "Microsoft",
            "IBM"
        ],
        correct: 2
    },
    {
        question: "O que é 'HTML5'?",
        options: [
            "Uma linguagem de programação",
            "Uma versão atualizada da linguagem de marcação HTML",
            "Um tipo de banco de dados",
            "Um protocolo de rede"
        ],
        correct: 1
    },
    {
        question: "Qual destes é um serviço de armazenamento em nuvem?",
        options: [
            "Google Drive",
            "Microsoft Word",
            "Adobe Photoshop",
            "Windows Explorer"
        ],
        correct: 0
    },
    {
        question: "O que significa a sigla 'URL'?",
        options: [
            "Uniform Resource Locator",
            "Universal Reference Link",
            "Unified Resource Location",
            "Universal Resource Locator"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um framework JavaScript para construção de interfaces?",
        options: [
            "Django",
            "Laravel",
            "React",
            "Spring"
        ],
        correct: 2
    },
    {
        question: "O que é 'phishing'?",
        options: [
            "Um tipo de pescaria",
            "Uma técnica de fraude online",
            "Um protocolo de rede",
            "Um método de programação"
        ],
        correct: 1
    },
    {
        question: "Qual destes é um sistema de controle de versão?",
        options: [
            "Git",
            "Java",
            "Python",
            "HTML"
        ],
        correct: 0
    },
    {
        question: "O que é um 'driver' em computação?",
        options: [
            "Um tipo de software que controla um dispositivo de hardware",
            "Um programa para navegar na internet",
            "Um tipo de vírus",
            "Um algoritmo de ordenação"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um método de autenticação segura?",
        options: [
            "Senha '123456'",
            "Autenticação de dois fatores",
            "Usar o mesmo password em todos os serviços",
            "Compartilhar senhas com amigos"
        ],
        correct: 1
    },
    {
        question: "O que é 'CSS' no desenvolvimento web?",
        options: [
            "Computer Style System",
            "Cascading Style Sheets",
            "Creative Style Software",
            "Centralized Styling Service"
        ],
        correct: 1
    },
    {
        question: "Qual destes é um tipo de malware?",
        options: [
            "Firewall",
            "Antivírus",
            "Ransomware",
            "JavaScript"
        ],
        correct: 2
    },
    {
        question: "O que é 'IoT'?",
        options: [
            "Internet of Things",
            "International Online Technology",
            "Internet Organization Team",
            "Integrated Online Transfer"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um algoritmo de busca na internet?",
        options: [
            "Google",
            "Windows",
            "Photoshop",
            "Excel"
        ],
        correct: 0
    },
    {
        question: "O que é 'cloud computing'?",
        options: [
            "Computação em nuvem",
            "Um tipo de hardware",
            "Um programa de edição de texto",
            "Um protocolo de internet"
        ],
        correct: 0
    },
    // Novas questões adicionadas (100 questões)
    {
        question: "Qual linguagem de programação foi criada por Guido van Rossum?",
        options: [
            "Python",
            "Java",
            "C++",
            "Ruby"
        ],
        correct: 0
    },
    {
        question: "O que significa la sigla 'VPN'?",
        options: [
            "Virtual Private Network",
            "Visual Programming Network",
            "Virtual Protocol Number",
            "Verified Private Node"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um tipo de memória volátil?",
        options: [
            "HDD",
            "SSD",
            "RAM",
            "ROM"
        ],
        correct: 2
    },
    {
        question: "Qual empresa é conhecida pelo processador Core i7?",
        options: [
            "AMD",
            "Intel",
            "NVIDIA",
            "Qualcomm"
        ],
        correct: 1
    },
    {
        question: "O que é um 'bit'?",
        options: [
            "Unidade de medida de velocidade",
            "A menor unidade de informação digital",
            "Tipo de arquivo de imagem",
            "Protocolo de rede"
        ],
        correct: 1
    },
    {
        question: "Qual destes NÃO é uma linguagem de programação?",
        options: [
            "Kotlin",
            "Swift",
            "TensorFlow",
            "Go"
        ],
        correct: 2
    },
    {
        question: "O que significa 'HTTP'?",
        options: [
            "HyperText Transfer Protocol",
            "High Transfer Text Protocol",
            "Hyper Transfer Text Process",
            "HighTech Transfer Protocol"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um sistema operacional móvel?",
        options: [
            "Windows Phone",
            "Chrome OS",
            "Ubuntu",
            "Linux Mint"
        ],
        correct: 0
    },
    {
        question: "O que é um 'domain' na internet?",
        options: [
            "Um tipo de servidor",
            "Endereço único que identifica um site",
            "Protocolo de segurança",
            "Linguagem de programação"
        ],
        correct: 1
    },
    {
        question: "Qual empresa desenvolveu o sistema operacional Linux?",
        options: [
            "Linus Torvalds",
            "Microsoft",
            "Apple",
            "Google"
        ],
        correct: 0
    },
    {
        question: "O que é 'machine learning'?",
        options: [
            "Aprendizado de máquina",
            "Técnica de montagem de computadores",
            "Método de programação",
            "Protocolo de rede"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um editor de código popular?",
        options: [
            "Visual Studio Code",
            "Microsoft Word",
            "Adobe Photoshop",
            "Google Docs"
        ],
        correct: 0
    },
    {
        question: "O que é 'open source'?",
        options: [
            "Código fonte aberto",
            "Software pago",
            "Tipo de hardware",
            "Protocolo de internet"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um banco de dados NoSQL?",
        options: [
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "SQLite"
        ],
        correct: 2
    },
    {
        question: "O que é 'big data'?",
        options: [
            "Conjunto de dados muito grande",
            "Tipo de processador",
            "Protocolo de rede",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual empresa criou o iPhone?",
        options: [
            "Samsung",
            "Apple",
            "Google",
            "Microsoft"
        ],
        correct: 1
    },
    {
        question: "O que é um 'server'?",
        options: [
            "Dispositivo de entrada",
            "Servidor que fornece serviços a outros dispositivos",
            "Tipo de software de edição",
            "Protocolo de segurança"
        ],
        correct: 1
    },
    {
        question: "Qual destes é um framework CSS?",
        options: [
            "React",
            "Bootstrap",
            "Django",
            "Angular"
        ],
        correct: 1
    },
    {
        question: "O que é 'Wi-Fi'?",
        options: [
            "Tecnologia de rede sem fio",
            "Tipo de cabo de réseau",
            "Protocolo de internet",
            "Software de segurança"
        ],
        correct: 0
    },
    {
        question: "Qual destes NÃO é um tipo de rede?",
        options: [
            "LAN",
            "WAN",
            "MAN",
            "CAN"
        ],
        correct: 3
    },
    {
        question: "O que é 'blockchain'?",
        options: [
            "Tecnologia de registro distribuído",
            "Tipo de antivírus",
            "Software de edição de texto",
            "Protocolo de rede"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o Photoshop?",
        options: [
            "Adobe",
            "Microsoft",
            "Google",
            "Apple"
        ],
        correct: 0
    },
    {
        question: "O que é um 'algorithm'?",
        options: [
            "Conjunto de instruções para resolver um problema",
            "Tipo de hardware",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um serviço de streaming?",
        options: [
            "Netflix",
            "Microsoft Office",
            "Adobe Premiere",
            "Google Drive"
        ],
        correct: 0
    },
    {
        question: "O que é 'cybersecurity'?",
        options: [
            "Segurança cibernética",
            "Tipo de rede",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual destes é uma linguagem de estilização?",
        options: [
            "HTML",
            "JavaScript",
            "CSS",
            "Python"
        ],
        correct: 2
    },
    {
        question: "O que é 'virtual reality'?",
        options: [
            "Realidade virtual",
            "Tipo de processador",
            "Protocolo de rede",
            "Software de segurança"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o WhatsApp?",
        options: [
            "Facebook",
            "Google",
            "Microsoft",
            "Twitter"
        ],
        correct: 0
    },
    {
        question: "O que é um 'router'?",
        options: [
            "Dispositivo que encaminha pacotes de dados entre redes",
            "Tipo de software",
            "Protocolo de internet",
            "Dispositivo de armazenamento"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um sistema de gerenciamento de conteúdo?",
        options: [
            "WordPress",
            "Excel",
            "Photoshop",
            "Python"
        ],
        correct: 0
    },
    {
        question: "O que é 'artificial intelligence'?",
        options: [
            "Inteligência artificial",
            "Tipo de hardware",
            "Protocolo de rede",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema iOS?",
        options: [
            "Apple",
            "Google",
            "Microsoft",
            "Samsung"
        ],
        correct: 0
    },
    {
        question: "O que é 'encryption'?",
        options: [
            "Criptografia",
            "Tipo de rede",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um protocolo de email?",
        options: [
            "HTTP",
            "FTP",
            "SMTP",
            "TCP"
        ],
        correct: 2
    },
    {
        question: "O que é 'responsive design'?",
        options: [
            "Design que se adapta a diferentes tamanhos de tela",
            "Tipo de processador",
            "Protocolo de rede",
            "Software de segurança"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o Python?",
        options: [
            "Google",
            "Microsoft",
            "Python Software Foundation",
            "Apple"
        ],
        correct: 2
    },
    {
        question: "O que é 'cloud storage'?",
        options: [
            "Armazenamento em nuvem",
            "Tipo de hardware",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um framework JavaScript?",
        options: [
            "Django",
            "Laravel",
            "React",
            "Spring"
        ],
        correct: 2
    },
    {
        question: "O que é 'data mining'?",
        options: [
            "Mineração de dados",
            "Tipo de rede",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema Windows?",
        options: [
            "Microsoft",
            "Apple",
            "Google",
            "IBM"
        ],
        correct: 0
    },
    {
        question: "O que é 'API'?",
        options: [
            "Interface de Programação de Aplicações",
            "Tipo de hardware",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um serviço de computação em nuvem?",
        options: [
            "AWS",
            "Microsoft Word",
            "Adobe Photoshop",
            "Google Chrome"
        ],
        correct: 0
    },
    {
        question: "O que é 'UX design'?",
        options: [
            "Design de experiência do usuário",
            "Tipo de processador",
            "Protocolo de rede",
            "Software de segurança"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema macOS?",
        options: [
            "Apple",
            "Google",
            "Microsoft",
            "Linux"
        ],
        correct: 0
    },
    {
        question: "O que é 'agile methodology'?",
        options: [
            "Metodologia ágil",
            "Tipo de hardware",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um banco de dados Oracle?",
        options: [
            "MySQL",
            "MongoDB",
            "Oracle Database",
            "SQLite"
        ],
        correct: 2
    },
    {
        question: "O que é 'IoT security'?",
        options: [
            "Segurança de Internet das Coisas",
            "Tipo de rede",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema Android?",
        options: [
            "Google",
            "Apple",
            "Microsoft",
            "Samsung"
        ],
        correct: 0
    },
    {
        question: "O que é 'devops'?",
        options: [
            "Combinação de desenvolvimento and operações",
            "Tipo de processador",
            "Protocolo de rede",
            "Software de segurança"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um serviço de versionamento?",
        options: [
            "GitHub",
            "Google Drive",
            "Dropbox",
            "OneDrive"
        ],
        correct: 0
    },
    {
        question: "O que é 'quantum computing'?",
        options: [
            "Computação quântica",
            "Tipo de hardware",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema Linux?",
        options: [
            "Linus Torvalds",
            "Google",
            "Microsoft",
            "Apple"
        ],
        correct: 0
    },
    {
        question: "O que é 'neural network'?",
        options: [
            "Rede neural",
            "Tipo de rede de computadores",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um framework PHP?",
        options: [
            "Django",
            "Laravel",
            "React",
            "Angular"
        ],
        correct: 1
    },
    {
        question: "O que é 'cyber attack'?",
        options: [
            "Ataque cibernético",
            "Tipo de antivírus",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema Chrome OS?",
        options: [
            "Google",
            "Apple",
            "Microsoft",
            "Samsung"
        ],
        correct: 0
    },
    {
        question: "O que é 'scrum'?",
        options: [
            "Framework ágil",
            "Tipo de hardware",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um serviço de email?",
        options: [
            "Gmail",
            "Google Drive",
            "Dropbox",
            "OneNote"
        ],
        correct: 0
    },
    {
        question: "O que é '5G technology'?",
        options: [
            "Tecnologia de quinta geração para redes móveis",
            "Tipo de processador",
            "Protocolo de rede",
            "Software de segurança"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema Ubuntu?",
        options: [
            "Canonical Ltd.",
            "Google",
            "Microsoft",
            "Apple"
        ],
        correct: 0
    },
    {
        question: "O que é 'machine vision'?",
        options: [
            "Visão computacional",
            "Tipo de monitor",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um framework Python?",
        options: [
            "Django",
            "Laravel",
            "React",
            "Angular"
        ],
        correct: 0
    },
    {
        question: "O que é 'data science'?",
        options: [
            "Ciência de dados",
            "Tipo de hardware",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema Windows Phone?",
        options: [
            "Microsoft",
            "Apple",
            "Google",
            "Samsung"
        ],
        correct: 0
    },
    {
        question: "O que é 'augmented reality'?",
        options: [
            "Realidade aumentada",
            "Tipo de processador",
            "Protocolo de rede",
            "Software de segurança"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um serviço de mensagens?",
        options: [
            "Telegram",
            "Google Drive",
            "Dropbox",
            "OneNote"
        ],
        correct: 0
    },
    {
        question: "O que é 'edge computing'?",
        options: [
            "Computação de borda",
            "Tipo de hardware",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema Fedora?",
        options: [
            "Red Hat",
            "Google",
            "Microsoft",
            "Apple"
        ],
        correct: 0
    },
    {
        question: "O que é 'natural language processing'?",
        options: [
            "Processamento de linguagem natural",
            "Tipo de teclado",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um framework Java?",
        options: [
            "Django",
            "Laravel",
            "Spring",
            "React"
        ],
        correct: 2
    },
    {
        question: "O que é 'cyber crime'?",
        options: [
            "Crime cibernético",
            "Tipo de antivírus",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema Debian?",
        options: [
            "Debian Project",
            "Google",
            "Microsoft",
            "Apple"
        ],
        correct: 0
    },
    {
        question: "O que é 'robotic process automation'?",
        options: [
            "Automação de processos robóticos",
            "Tipo de hardware",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um serviço de armazenamento?",
        options: [
            "Dropbox",
            "Gmail",
            "Telegram",
            "WhatsApp"
        ],
        correct: 0
    },
    {
        question: "O que é '6G technology'?",
        options: [
            "Tecnologia de sexta geração para redes móveis",
            "Tipo de processador",
            "Protocolo de rede",
            "Software de segurança"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema Arch Linux?",
        options: [
            "Arch Linux Team",
            "Google",
            "Microsoft",
            "Apple"
        ],
        correct: 0
    },
    {
        question: "O que é 'computer vision'?",
        options: [
            "Visão computacional",
            "Tipo de monitor",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um framework JavaScript para back-end?",
        options: [
            "React",
            "Angular",
            "Node.js",
            "Vue.js"
        ],
        correct: 2
    },
    {
        question: "O que é 'information security'?",
        options: [
            "Segurança da informação",
            "Tipo de hardware",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema FreeBSD?",
        options: [
            "FreeBSD Project",
            "Google",
            "Microsoft",
            "Apple"
        ],
        correct: 0
    },
    {
        question: "O que é 'deep learning'?",
        options: [
            "Aprendizado profundo",
            "Tipo de processador",
            "Protocolo de rede",
            "Software de segurança"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um serviço de videoconferência?",
        options: [
            "Zoom",
            "Gmail",
            "Dropbox",
            "OneNote"
        ],
        correct: 0
    },
    {
        question: "O que é 'serverless computing'?",
        options: [
            "Computação sem servidor",
            "Tipo de hardware",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema OpenSUSE?",
        options: [
            "SUSE Linux GmbH",
            "Google",
            "Microsoft",
            "Apple"
        ],
        correct: 0
    },
    {
        question: "O que é 'predictive analytics'?",
        options: [
            "Análise preditiva",
            "Tipo de teclado",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um framework CSS?",
        options: [
            "React",
            "Angular",
            "Bootstrap",
            "Vue.js"
        ],
        correct: 2
    },
    {
        question: "O que é 'digital transformation'?",
        options: [
            "Transformação digital",
            "Tipo de antivírus",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema CentOS?",
        options: [
            "Red Hat",
            "Google",
            "Microsoft",
            "Apple"
        ],
        correct: 0
    },
    {
        question: "O que é 'internet privacy'?",
        options: [
            "Privacidade na internet",
            "Tipo de hardware",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um serviço de produtividade?",
        options: [
            "Google Workspace",
            "Netflix",
            "Spotify",
            "Zoom"
        ],
        correct: 0
    },
    {
        question: "O que é 'wireless charging'?",
        options: [
            "Carregamento sem fio",
            "Tipo de processador",
            "Protocolo de rede",
            "Software de segurança"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema elementary OS?",
        options: [
            "elementary LLC",
            "Google",
            "Microsoft",
            "Apple"
        ],
        correct: 0
    },
    {
        question: "O que é 'data warehouse'?",
        options: [
            "Armazém de dados",
            "Tipo de monitor",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um framework JavaScript para front-end?",
        options: [
            "Node.js",
            "Express.js",
            "React",
            "Nest.js"
        ],
        correct: 2
    },
    {
        question: "O que é 'network security'?",
        options: [
            "Segurança de rede",
            "Tipo de hardware",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o system Zorin OS?",
        options: [
            "Zorin Group",
            "Google",
            "Microsoft",
            "Apple"
        ],
        correct: 0
    },
    {
        question: "O que é 'business intelligence'?",
        options: [
            "Inteligência de negócios",
            "Tipo de processador",
            "Protocolo de rede",
            "Software de segurança"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um serviço de música?",
        options: [
            "Spotify",
            "Netflix",
            "Zoom",
            "Google Workspace"
        ],
        correct: 0
    },
    {
        question: "O que é 'quantum cryptography'?",
        options: [
            "Criptografia quântica",
            "Tipo de hardware",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual empresa desenvolveu o sistema Pop!_OS?",
        options: [
            "System76",
            "Google",
            "Microsoft",
            "Apple"
        ],
        correct: 0
    },
    {
        question: "O que é 'data analytics'?",
        options: [
            "Análise de dados",
            "Tipo de teclado",
            "Protocolo de internet",
            "Software de edição"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um framework JavaScript?",
        options: [
            "Django",
            "Laravel",
            "Vue.js",
            "Spring"
        ],
        correct: 2
    }
];