// Declara uma variável chamada 'dados', que é um array de objetos
let dados = [
    {
        // Título do treino
        titulo: "Treino rápido e prático para Qualquer Iniciante sair do Sedentarismo",
        // Descrição do treino, explicando seu propósito e características
        descricao: "Este treino é ideal para iniciantes que querem sair do sedentarismo. É rápido, simples e eficiente, focado em exercícios que qualquer pessoa pode realizar.",
        // URL do vídeo do treino no YouTube, que será exibido na página
        videoUrl: "https://www.youtube.com/embed/-Qv4VoA3Gi8",
        // Link direto para o vídeo no YouTube
        link: "https://youtu.be/-Qv4VoA3Gi8",
        // Tags associadas ao treino, usadas para melhorar a pesquisa
        tags: ["treino", "iniciantes", "sedentarismo", "exercício físico"]
    },
    // Adicione mais objetos conforme necessário
    {
      titulo: "Cardio para Queimar a Gordura do Corpo TODO com MÚSICA",
      descricao: "Um treino de cardio animado com música para ajudar a queimar gordura corporal. Este exercício é perfeito para quem quer se movimentar de forma divertida.",
      videoUrl: "https://www.youtube.com/embed/eXi6CWnKEnw",
      link: "https://youtu.be/eXi6CWnKEnw",
      tags: ["cardio", "queima de gordura", "exercício", "música"]
    },
    {
        titulo: "Faça isso toda manhã pra Diminuir BARRIGA e tornear PERNAS",
        descricao: "Um treino matinal eficaz para ajudar a reduzir a gordura abdominal e tonificar as pernas. Ideal para quem quer começar o dia com um exercício revigorante e focado.",
        videoUrl: "https://www.youtube.com/embed/uDvki1nJieg",
        link: "https://youtu.be/uDvki1nJieg",
        tags: ["diminuir barriga", "tonificar pernas", "treino matinal", "exercício"]
    },    
    {
      titulo: "Treino de Pernas ZERO IMPACTO para Iniciante",
      descricao: "Treino de pernas de baixo impacto, perfeito para iniciantes ou pessoas que precisam de um exercício sem sobrecarregar as articulações.",
      videoUrl: "https://www.youtube.com/embed/YVuDBe5RM_4",
      link: "https://youtu.be/YVuDBe5RM_4",
      tags: ["treino de pernas", "baixo impacto", "iniciantes", "exercício físico"]
    },
    {
        titulo: "Treino para deixar o CORPO durinho e definido",
        descricao: "Um treino intenso para ajudar a deixar o corpo mais firme e definido. Perfeito para quem busca um desafio e quer resultados visíveis.",
        videoUrl: "https://www.youtube.com/embed/qFvBNXvgC-g",
        link: "https://youtu.be/qFvBNXvgC-g",
        tags: ["corpo durinho", "definição muscular", "treino intenso", "exercício"]
    },
    {
        titulo: "Aquecimento para TODOS os Treinos / Cardio divertido e fácil para iniciantes",
        descricao: "Um aquecimento completo e divertido, ideal para iniciar qualquer treino. Cardio fácil para iniciantes que preparará seu corpo para exercícios mais intensos.",
        videoUrl: "https://www.youtube.com/embed/sXDcW15YGGE",
        link: "https://youtu.be/sXDcW15YGGE",
        tags: ["aquecimento", "cardio", "iniciantes", "exercício divertido"]
    },
    {
        titulo: "Treino INICIANTES para o CORPO TODO!",
        descricao: "Um treino abrangente e acessível para iniciantes, cobrindo todo o corpo. Ideal para quem está começando e quer uma rotina simples e eficiente.",
        videoUrl: "https://www.youtube.com/embed/YlG4lBk9JAM",
        link: "https://youtu.be/YlG4lBk9JAM",
        tags: ["treino iniciantes", "corpo todo", "exercício completo", "rotina simples"]
    },
    {
        titulo: "Treino FÁCIL para Emagrecer INICIANTES",
        descricao: "Um treino fácil e acessível para iniciantes, focado na perda de peso. Perfeito para quem deseja emagrecer de forma gradual e sem complicações.",
        videoUrl: "https://www.youtube.com/embed/ALRdZkA6rXs",
        link: "https://youtu.be/ALRdZkA6rXs",
        tags: ["emagrecimento", "treino fácil", "iniciantes", "perda de peso"]
    },
    {
        titulo: "Treino para SEDENTÁRIOS em CASA, fácil, prático e eficiente!",
        descricao: "Um treino ideal para pessoas sedentárias que querem começar a se exercitar em casa. Simples, prático e eficaz para melhorar a saúde e o condicionamento físico.",
        videoUrl: "https://www.youtube.com/embed/Gs7H9oRGeiY",
        link: "https://youtu.be/Gs7H9oRGeiY",
        tags: ["sedentários", "treino em casa", "exercício fácil", "prático"]
    },
    {
        titulo: "Treino ESPECIAL para Sedentário de apenas 8 minutos",
        descricao: "Um treino especial e rápido para sedentários, com apenas 8 minutos de duração. Ideal para quem está começando e quer resultados rápidos.",
        videoUrl: "https://www.youtube.com/embed/-QIxe6C-UoA",
        link: "https://youtu.be/-QIxe6C-UoA",
        tags: ["sedentário", "treino rápido", "iniciantes", "8 minutos"]
    },
    {
        titulo: "Treino para INICIANTES e seguro para GRAVIDAS com Cadeira",
        descricao: "Um treino acessível para iniciantes e seguro para grávidas, utilizando uma cadeira. Perfeito para quem busca um exercício adaptável e fácil de realizar.",
        videoUrl: "https://www.youtube.com/embed/Flxq2wtgA5w",
        link: "https://youtu.be/Flxq2wtgA5w",
        tags: ["iniciantes", "grávidas", "cadeira", "exercício seguro"]
    },
    {
        titulo: "Treino para INICIANTES - Corpo Todo usando uma Bolinha",
        descricao: "Um treino completo para iniciantes que utiliza uma bolinha. Ideal para quem deseja trabalhar o corpo todo de forma divertida e acessível.",
        videoUrl: "https://www.youtube.com/embed/M_-KgyUMFIA",
        link: "https://youtu.be/M_-KgyUMFIA",
        tags: ["iniciantes", "corpo todo", "bolinha", "exercício divertido"]
    },
    {
        titulo: "Exercícios completos em casa para INICIANTES - SEM IMPACTO",
        descricao: "Exercícios completos e de baixo impacto para iniciantes, perfeitos para realizar em casa. Ideal para quem busca uma rotina suave e eficaz.",
        videoUrl: "https://www.youtube.com/embed/jLXJhDYjn3Q",
        link: "https://youtu.be/jLXJhDYjn3Q",
        tags: ["iniciantes", "exercício em casa", "sem impacto", "rotina completa"]
    },
    {
        titulo: "Treino fácil para acabar com a flacidez em casa para quem está começando a treinar",
        descricao: "Um treino fácil e acessível para combater a flacidez em casa, ideal para quem está começando a treinar. Prático e eficaz para resultados visíveis.",
        videoUrl: "https://www.youtube.com/embed/kSPvedyQ96w",
        link: "https://youtu.be/kSPvedyQ96w",
        tags: ["flacidez", "treino fácil", "iniciantes", "exercício em casa"]
    },
    {
        titulo: "Prática completa de pilates para iniciantes - EM CASA e SEM EQUIPAMENTOS!",
        descricao: "Uma prática completa de pilates para iniciantes, realizada em casa e sem equipamentos. Perfeito para fortalecer o corpo e melhorar a flexibilidade.",
        videoUrl: "https://www.youtube.com/embed/RUpsq4SyzDY",
        link: "https://youtu.be/RUpsq4SyzDY",
        tags: ["pilates", "iniciantes", "em casa", "sem equipamentos"]
    },
    {
        titulo: "Aula completa de Hipopressivo para iniciantes.",
        descricao: "Uma aula completa de hipopressivo para iniciantes, ideal para melhorar a postura e a respiração. Eficaz e acessível para todos.",
        videoUrl: "https://www.youtube.com/embed/tzS46xxYhEw",
        link: "https://youtu.be/tzS46xxYhEw",
        tags: ["hipopressivo", "iniciantes", "aula completa", "postura"]
    },
    {
        titulo: "AEROHIIT MEGA EMAGRECEDOR - Treino para Emagrecer Dançando",
        descricao: "Um treino de AeroHIIT para emagrecimento, combinando dança e exercícios intensos. Ideal para quem deseja perder peso de forma divertida e eficaz.",
        videoUrl: "https://www.youtube.com/embed/otDVwrGnZus",
        link: "https://youtu.be/otDVwrGnZus",
        tags: ["AeroHIIT", "emagrecimento", "dança", "exercício intenso"]
    },
    {
        titulo: "MEDITAÇÃO GUIADA E RESPIRAÇÃO PARA O EQUILÍBRIO INTERNO!",
        descricao: "Uma meditação guiada com técnicas de respiração para promover o equilíbrio interno. Perfeito para relaxar e encontrar tranquilidade.",
        videoUrl: "https://www.youtube.com/embed/oeExtp56oBI",
        link: "https://youtu.be/oeExtp56oBI",
        tags: ["meditação", "respiração", "equilíbrio interno", "relaxamento"]
    },
    {
        titulo: "Alongamento pra fazer todos os dias - pra fazer em qualquer lugar a qualquer hora",
        descricao: "Um alongamento simples e eficaz para realizar todos os dias, em qualquer lugar e a qualquer hora. Ideal para melhorar a flexibilidade e a saúde geral.",
        videoUrl: "https://www.youtube.com/embed/yEuIF9d486Q",
        link: "https://youtu.be/yEuIF9d486Q",
        tags: ["alongamento", "flexibilidade", "exercício diário", "saúde"]
    },
    {
        titulo: "Treino Cardio para obesos - pra perder quilos em casa",
        descricao: "Um treino de cardio acessível para pessoas obesas, focado na perda de peso em casa. Eficaz e adaptado para quem está começando.",
        videoUrl: "https://www.youtube.com/embed/PHqSRTLpuj8",
        link: "https://youtu.be/PHqSRTLpuj8",
        tags: ["cardio", "obesos", "perda de peso", "em casa"]
    },
    {
        titulo: "Exercícios para obesos - emagrecer em casa sem impacto",
        descricao: "Exercícios adaptados para obesos, realizados em casa e sem impacto. Ideal para quem busca emagrecer de forma segura e eficaz.",
        videoUrl: "https://www.youtube.com/embed/sxHJR85LIBE",
        link: "https://youtu.be/sxHJR85LIBE",
        tags: ["obesos", "emagrecimento", "sem impacto", "exercício em casa"]
    },
    {
        titulo: "Treino Aeróbico seguro em casa pra derreter gordurinhas - treino para obesos",
        descricao: "Treino aeróbico seguro e eficaz para obesos, realizado em casa. Ideal para quem deseja queimar gordura de forma controlada e segura.",
        videoUrl: "https://www.youtube.com/embed/nagR2-_xsXc",
        link: "https://youtu.be/nagR2-_xsXc",
        tags: ["aeróbico", "obesos", "queima de gordura", "em casa"]
    },
    {
        titulo: "Treino na parede para endurecer o corpo todo em casa",
        descricao: "Um treino utilizando a parede para trabalhar todo o corpo em casa. Eficaz para endurecer e tonificar os músculos.",
        videoUrl: "https://www.youtube.com/embed/dvGvvgBoTwk",
        link: "https://youtu.be/dvGvvgBoTwk",
        tags: ["treino na parede", "endurecimento", "corpo todo", "em casa"]
    },
    {
        titulo: "Treino para levantar glúteos no sofá de casa sem equipamentos",
        descricao: "Um treino específico para levantar os glúteos, utilizando apenas o sofá e sem equipamentos. Ideal para quem quer resultados visíveis em casa.",
        videoUrl: "https://www.youtube.com/embed/slBrI7mscZc",
        link: "https://youtu.be/slBrI7mscZc",
        tags: ["glúteos", "treino no sofá", "sem equipamentos", "em casa"]
    },
    {
        titulo: "Treino COMPLETO super potente para pernas e glúteos em casa",
        descricao: "Um treino completo e potente para trabalhar pernas e glúteos em casa. Eficaz para fortalecer e definir essas áreas.",
        videoUrl: "https://www.youtube.com/embed/XrUTo7iLphE",
        link: "https://youtu.be/XrUTo7iLphE",
        tags: ["pernas", "glúteos", "treino completo", "em casa"]
    },
    {
        titulo: "Pernas e bumbum durinhos treinando em casa na parede",
        descricao: "Um treino específico para fortalecer pernas e bumbum, utilizando a parede e realizado em casa. Ideal para tonificar essas áreas.",
        videoUrl: "https://www.youtube.com/embed/qwgQJf5YguE",
        link: "https://youtu.be/qwgQJf5YguE",
        tags: ["pernas", "bumbum", "treino na parede", "em casa"]
    },
    {
        titulo: "Treino completo para levantar bumbum - Glúteos em casa",
        descricao: "Um treino completo para levantar e definir os glúteos, realizado em casa. Ideal para quem busca resultados visíveis e rápidos.",
        videoUrl: "https://www.youtube.com/embed/HlbxXkRAXxw",
        link: "https://youtu.be/HlbxXkRAXxw",
        tags: ["glúteos", "bumbum", "treino completo", "em casa"]
    },
    {
        titulo: "Treino para tonificar corpo todo em casa- Fácil e completo",
        descricao: "Um treino fácil e completo para tonificar todo o corpo em casa. Ideal para quem deseja uma rotina prática e eficiente.",
        videoUrl: "https://www.youtube.com/embed/UgqsIYcdM60",
        link: "https://youtu.be/UgqsIYcdM60",
        tags: ["tonificação", "corpo todo", "em casa", "treino fácil"]
    },
    {
        titulo: "Treino para arrebitar o bumbum somente exercícios em pé - sem deitar",
        descricao: "Um treino focado em levantar o bumbum, utilizando apenas exercícios em pé e sem necessidade de deitar. Ideal para quem busca resultados rápidos.",
        videoUrl: "https://www.youtube.com/embed/cA-IC6mEv_w",
        link: "https://youtu.be/cA-IC6mEv_w",
        tags: ["bumbum", "exercícios em pé", "sem deitar", "em casa"]
    },
    {
        titulo: "Exercícios para aumentar bumbum e ganhar massa magra",
        descricao: "Exercícios específicos para aumentar o bumbum e ganhar massa magra. Eficaz e ideal para quem deseja resultados visíveis e duradouros.",
        videoUrl: "https://www.youtube.com/embed/GlmkB4C_nxs",
        link: "https://youtu.be/GlmkB4C_nxs",
        tags: ["bumbum", "massa magra", "aumento", "exercícios eficazes"]
    },
    {
        titulo: "Super Treino de Braços para deixar DURINHOS E TONIFICADOS!",
        descricao: "Um treino intenso para braços, focado em tonificar e deixar os músculos durinhos. Ideal para quem busca um resultado eficaz e rápido.",
        videoUrl: "https://www.youtube.com/embed/5zrLskUH9dk",
        link: "https://youtu.be/5zrLskUH9dk",
        tags: ["braços", "tonificação", "músculos durinhos", "treino intenso"]
    }
    
    
  ];
  