export class PersonalityMapper {
    constructor() {
        // Expanded personality profiles with creative names and detailed insights
        this.personalities = {
            1: { 
                name: "O Pioneiro", 
                description: "Dinâmico e corajoso, sempre em busca de novos desafios.",
                strengths: ["Energia alta", "Determinação", "Coragem"],
                weaknesses: ["Impulsividade", "Impaciência", "Teimosia"],
                improvementAreas: ["Paciência", "Escuta ativa", "Planejamento"],
                opportunities: ["Liderança", "Iniciativas inovadoras", "Desafios pessoais"]
            },
            2: { 
                name: "O Sensível", 
                description: "Intuitivo e conectado emocionalmente, aprecia nuances.",
                strengths: ["Estabilidade", "Persistência", "Sensibilidade"],
                weaknesses: ["Teimosia", "Resistência à mudança", "Possessividade"],
                improvementAreas: ["Flexibilidade", "Adaptação", "Abertura a novas ideias"],
                opportunities: ["Desenvolvimento pessoal", "Conexões emocionais", "Autocuidado"]
            },
            3: { 
                name: "O Comunicador", 
                description: "Versátil e expressivo, adora variedade e conexões.",
                strengths: ["Comunicação eficaz", "Adaptação", "Curiosidade"],
                weaknesses: ["Instabilidade", "Superficialidade", "Distracção"],
                improvementAreas: ["Foco", "Profundidade emocional", "Compromisso"],
                opportunities: ["Aprendizado contínuo", "Redes sociais", "Expressão criativa"]
            },
            4: { 
                name: "O Protetor", 
                description: "Estável, seguro e comprometido com sua família e metas.",
                strengths: ["Lealdade", "Cuidado", "Proteção"],
                weaknesses: ["Sensibilidade excessiva", "Resistência à mudança", "Controle excessivo"],
                improvementAreas: ["Flexibilidade", "Abertura a mudanças", "Equilíbrio emocional"],
                opportunities: ["Desenvolvimento familiar", "Crescimento emocional", "Segurança financeira"]
            },
            5: { 
                name: "O Criativo", 
                description: "Expressivo, ousado e sempre em busca de experiências únicas.",
                strengths: ["Confiança", "Criatividade", "Generosidade"],
                weaknesses: ["Egoísmo", "Pride", "Dramatização"],
                improvementAreas: ["Humildade", "Empatia", "Trabalho em equipe"],
                opportunities: ["Expressão artística", "Liderança", "Desenvolvimento pessoal"]
            },
            6: { 
                name: "O Harmonizador", 
                description: "Diplomático, equilibrado e que busca paz e justiça.",
                strengths: ["Análise", "Praticidade", "Atenção ao detalhe"],
                weaknesses: ["Perfeccionismo", "Crítica excessiva", "Ansiedade"],
                improvementAreas: ["Autoconfiança", "Flexibilidade", "Equilíbrio entre trabalho e lazer"],
                opportunities: ["Desenvolvimento profissional", "Saúde e bem-estar", "Relacionamentos harmoniosos"]
            },
            7: { 
                name: "O Investigador", 
                description: "Profundo, analítico e sempre buscando entender a fundo.",
                strengths: ["Equilíbrio", "Diplomacia", "Análise"],
                weaknesses: ["Indecisão", "Dependência de opiniões", "Superficialidade"],
                improvementAreas: ["Autoconfiança", "Tomada de decisões", "Profundidade emocional"],
                opportunities: ["Desenvolvimento pessoal", "Relacionamentos significativos", "Justiça e equidade"]
            },
            8: { 
                name: "O Conquistador", 
                description: "Ambicioso, poderoso e focado em seus objetivos.",
                strengths: ["Determinação", "Foco", "Intensidade"],
                weaknesses: ["Obsessão", "Vingança", "Controle excessivo"],
                improvementAreas: ["Flexibilidade", "Empatia", "Equilíbrio emocional"],
                opportunities: ["Desenvolvimento profissional", "Crescimento pessoal", "Relacionamentos intensos"]
            },
            9: { 
                name: "O Filósofo", 
                description: "Expansivo, otimista e sempre em busca de crescimento.",
                strengths: ["Otimismo", "Aventura", "Filosofia"],
                weaknesses: ["Impulsividade", "Superficialidade", "Desrespeito a limites"],
                improvementAreas: ["Autoconhecimento", "Respeito a limites", "Equilíbrio entre liberdade e responsabilidade"],
                opportunities: ["Desenvolvimento espiritual", "Aprendizado contínuo", "Exploração e aventura"]
            },
            10: { 
                name: "O Estrategista", 
                description: "Disciplinado, responsável e com metas bem definidas.",
                strengths: ["Disciplina", "Responsabilidade", "Planejamento"],
                weaknesses: ["Rigidez", "Perfeccionismo", "Dureza excessiva"],
                improvementAreas: ["Flexibilidade", "Empatia", "Equilíbrio entre trabalho e lazer"],
                opportunities: ["Desenvolvimento profissional", "Crescimento pessoal", "Liderança e responsabilidade"]
            },
            11: { 
                name: "O Revolucionário", 
                description: "Inovador, único e que desafia o status quo.",
                strengths: ["Inovação", "Independência", "Humanitarismo"],
                weaknesses: ["Rebelião excessiva", "Desconexão emocional", "Instabilidade"],
                improvementAreas: ["Equilíbrio entre individualidade e cooperação", "Empatia", "Estabilidade emocional"],
                opportunities: ["Desenvolvimento social", "Inovação e progresso", "Relacionamentos baseados em igualdade"]
            },
            12: { 
                name: "O Místico", 
                description: "Intuitivo, espiritual e conectado com dimensões além do óbvio.",
                strengths: ["Empatia", "Criatividade", "Intuição"],
                weaknesses: ["Dispersão", "Vulnerabilidade emocional", "Idealismo excessivo"],
                improvementAreas: ["Foco", "Assertividade", "Limites emocionais"],
                opportunities: ["Desenvolvimento espiritual", "Arte", "Cura emocional"]
            }
        };

        // Personality questions without direct zodiac references
        this.personalityQuestions = {
            1: [
                "Qual desafio recente te fez sentir verdadeiramente vivo?",
                "Como transforma energia em ação concreta?",
                "Qual sua estratégia para superar obstáculos?"
            ],
            2: [
                "Como cultiva sua estabilidade emocional?",
                "Qual conexão profunda mais te transformou?",
                "Como equilibra conforto e crescimento?"
            ],
            3: [
                "Como sua comunicação transforma relacionamentos?",
                "Qual história você adora contar?",
                "Como você conecta pessoas ao seu redor?"
            ],
            4: [
                "Como você protege seus entes queridos?",
                "Qual seu maior valor familiar?",
                "Como você constrói segurança para sua família?"
            ],
            5: [
                "Qual sua ideia mais inovadora recentemente?",
                "Como você alimenta sua criatividade?",
                "Qual experiência única mudou sua perspectiva?"
            ],
            6: [
                "Como você resolve conflitos com diplomacia?",
                "Qual sua estratégia para manter o equilíbrio?",
                "Como promove harmonia em ambientes tensos?"
            ],
            7: [
                "Qual mistério você mais gosta de desvendar?",
                "Como sua mente analítica resolve problemas?",
                "O que te fascina em compreender algo profundamente?"
            ],
            8: [
                "Qual seu maior objetivo de conquista?",
                "Como transforma desafios em oportunidades?",
                "Qual estratégia te faz chegar onde quer?"
            ],
            9: [
                "Qual lição de vida mais te transformou?",
                "Como expande seus horizontes constantemente?",
                "Qual sua filosofia de crescimento pessoal?"
            ],
            10: [
                "Como planeja cada detalhe de seus projetos?",
                "Qual sua metodologia para alcançar metas?",
                "Como disciplina transforma seus sonhos?"
            ],
            11: [
                "Qual status quo você já desafiou?",
                "Como sua inovação muda perspectivas?",
                "Qual sua forma de revolucionar ideias?"
            ],
            12: [
                "Qual sua conexão mais profunda com o universo?",
                "Como sua intuição te guia em momentos difíceis?",
                "Qual experiência espiritual mais te inspirou?"
            ]
        };

        // Updated sign boundaries with precise dates
        this.signBoundaries = {
            1: { startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 },     // Capricórnio
            2: { startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },      // Aquário
            3: { startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 },      // Peixes
            4: { startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },      // Áries
            5: { startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },      // Touro
            6: { startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 },      // Gêmeos
            7: { startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 },      // Câncer
            8: { startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },      // Leão
            9: { startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },      // Virgem
            10: { startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 },    // Libra
            11: { startMonth: 10, startDay: 23, endMonth: 11, endDay: 21 },   // Escorpião
            12: { startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 }    // Sagitário
        };
    }

    getPersonalityProfile(month, day, birthplace) {
        const personalityIndex = this.calculatePersonalityIndex(month, day);
        return this.personalities[personalityIndex];
    }

    calculatePersonalityIndex(month, day) {
        // Convert input to integers to ensure comparison works
        month = parseInt(month);
        day = parseInt(day);

        // Check each personality type's boundaries
        for (let [personalityType, boundaries] of Object.entries(this.signBoundaries)) {
            // Handle boundary that crosses year end (like Capricorn/December-January)
            if (boundaries.endMonth < boundaries.startMonth) {
                if ((month === boundaries.startMonth && day >= boundaries.startDay) || 
                    (month === boundaries.endMonth && day <= boundaries.endDay) ||
                    (month === 12 && day >= boundaries.startDay) ||
                    (month === 1 && day <= boundaries.endDay)) {
                    return parseInt(personalityType);
                }
            } else {
                // Normal case
                if (month === boundaries.startMonth && day >= boundaries.startDay ||
                    month === boundaries.endMonth && day <= boundaries.endDay) {
                    return parseInt(personalityType);
                }
            }
        }

        // Fallback method if no match found
        return ((month + day) % 12) + 1;
    }

    getRandomPersonalityQuestion(month, day) {
        const personalityIndex = this.calculatePersonalityIndex(month, day);
        const questions = this.personalityQuestions[personalityIndex] || 
            ["Qual desafio você superou recentemente?"];
        
        return questions[Math.floor(Math.random() * questions.length)];
    }
}