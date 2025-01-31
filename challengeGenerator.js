export class ChallengeGenerator {
    constructor() {
        this.usedChallenges = new Set(); 
        this.challenges = {
            weightLoss: {
                month1: [
                    "Realizar medições corporais e registrar peso inicial",
                    "Criar diário alimentar detalhado com contagem calórica",
                    "Implementar treino de alta intensidade (HIIT) de 30 minutos",
                    "Substituir 2 refeições por opções hipocalóricas",
                    "Preparar refeições saudáveis para próximo dia",
                    "Beber pelo menos 2 litros de água",
                    "Fazer 10.000 passos diários",
                    "Praticar exercícios de força por 20 minutos",
                    "Registrar sono e qualidade de descanso",
                    "Fazer meditação ou respiração consciente por 10 minutos"
                ],
                month2: [
                    "Realizar avaliação nutricional detalhada",
                    "Desenvolver plano de suplementação para emagrecimento",
                    "Implementar treino de resistência muscular",
                    "Monitorar ingestão de proteínas e macronutrientes",
                    "Criar receitas low carb para substituição de carboidratos",
                    "Praticar cardio de moderada intensidade",
                    "Fazer alongamento e flexibilidade",
                    "Estudar técnicas de nutrição consciente",
                    "Avaliar progressão de medidas corporais",
                    "Criar estratégia de gerenciamento de estresse"
                ],
                month3: [
                    "Avaliar necessidade de ajustes no plano alimentar",
                    "Desenvolver plano de treino com foco em hipertrofia",
                    "Implementar técnicas de nutrição para aumento de massa magra",
                    "Monitorar progresso de composição corporal",
                    "Criar rotina de exercícios para fortalecimento muscular",
                    "Praticar técnicas de mindfulness para controle de estresse",
                    "Fazer avaliação de necessidades nutricionais",
                    "Desenvolver plano de suplementação para apoio ao treino",
                    "Implementar treino de alta intensidade para queima de gordura",
                    "Avaliar progresso global e ajustar estratégias"
                ],
                month4: [
                    "Avaliar perfil inflamatório e estratégias de redução",
                    "Implementar técnicas avançadas de treinamento funcional",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de sono e recuperação para otimização metabólica",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição consciente",
                    "Avaliar necessidades de micronutrientes",
                    "Desenvolver plano de treino com foco em aumento de força",
                    "Implementar técnicas de modulação hormonal para emagrecimento",
                    "Criar plano de manutenção e sustentabilidade do emagrecimento"
                ],
                month5: [
                    "Implementar desafio de hidratação e nutrição celular",
                    "Criar plano de treino com foco em aumento de massa magra",
                    "Desenvolver técnicas de mindset para transformação corporal",
                    "Realizar check-up nutricional e hormonal completo",
                    "Implementar estratégias de nutrição regenerativa",
                    "Avaliar progresso metabólico e ajustar estratégias",
                    "Criar protocolo de recuperação muscular e nutrição pós-treino",
                    "Desenvolver estratégias de gerenciamento de estresse relacionado à perda de peso",
                    "Implementar treino de alta performance para queima de gordura",
                    "Avaliar necessidades de suplementação para apoio ao treino"
                ],
                month6: [
                    "Criar protocolo de desintoxicação natural e metabolismo",
                    "Desenvolver estratégias de nutrição para performance",
                    "Implementar treino de resistência e fortalecimento muscular",
                    "Avaliar progresso metabólico e ajustar estratégias",
                    "Criar plano de manutenção e estilo de vida saudável",
                    "Implementar técnicas avançadas de treinamento funcional",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de sono e recuperação para otimização metabólica",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição consciente"
                ],
                month7: [
                    "Avaliar perfil hormonal e estratégias de equilíbrio",
                    "Criar plano de treino com foco em metabolismo",
                    "Desenvolver técnicas de mindfulness para bem-estar",
                    "Realizar check-up nutricional completo",
                    "Implementar estratégias de nutrição integrativa",
                    "Avaliar progresso global e ajustar estratégias",
                    "Criar protocolo de recuperação muscular e nutrição pós-treino",
                    "Desenvolver estratégias de gerenciamento de estresse relacionado à perda de peso",
                    "Implementar treino de alta performance para queima de gordura",
                    "Avaliar necessidades de suplementação para apoio ao treino"
                ],
                month8: [
                    "Implementar técnicas avançadas de treinamento funcional",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de sono e recuperação metabólica",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição consciente",
                    "Avaliar necessidades de micronutrientes",
                    "Desenvolver plano de treino com foco em aumento de força",
                    "Implementar técnicas de modulação hormonal para emagrecimento",
                    "Criar plano de manutenção e sustentabilidade do emagrecimento",
                    "Avaliar progresso global e ajustar estratégias"
                ],
                month9: [
                    "Criar protocolo de modulação metabólica",
                    "Desenvolver estratégias de nutrição para longevidade",
                    "Implementar treino de alta performance",
                    "Avaliar progresso e ajustar estratégias",
                    "Criar plano de manutenção e saúde sustentável",
                    "Implementar técnicas avançadas de treinamento funcional",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de sono e recuperação para otimização metabólica",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição consciente"
                ],
                month10: [
                    "Implementar técnicas avançadas de treinamento",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de recuperação e descanso",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição intuitiva",
                    "Avaliar necessidades de micronutrientes",
                    "Desenvolver plano de treino com foco em aumento de força",
                    "Implementar técnicas de modulação hormonal para emagrecimento",
                    "Criar plano de manutenção e sustentabilidade do emagrecimento",
                    "Avaliar progresso global e ajustar estratégias"
                ],
                month11: [
                    "Avaliar perfil inflamatório e estratégias de redução",
                    "Criar plano de treino com foco em equilíbrio corporal",
                    "Desenvolver técnicas de mindset transformacional",
                    "Realizar check-up nutricional e hormonal",
                    "Implementar estratégias de nutrição regenerativa",
                    "Avaliar progresso metabólico e ajustar estratégias",
                    "Criar protocolo de recuperação muscular e nutrição pós-treino",
                    "Desenvolver estratégias de gerenciamento de estresse relacionado à perda de peso",
                    "Implementar treino de alta performance para queima de gordura",
                    "Avaliar necessidades de suplementação para apoio ao treino"
                ],
                month12: [
                    "Criar protocolo final de transformação corporal",
                    "Desenvolver estratégias de manutenção e estilo de vida",
                    "Implementar treino integrado de performance",
                    "Avaliar progresso global e resultados",
                    "Criar plano personalizado para próximo ciclo de saúde",
                    "Implementar técnicas avançadas de treinamento funcional",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de sono e recuperação para otimização metabólica",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição consciente"
                ]
            },
            generalHealth: {
                month1: [
                    "Realizar check-up nutricional completo",
                    "Desenvolver diário alimentar detalhado",
                    "Praticar exercícios de mobilidade articular",
                    "Implementar rotina de sono regulada",
                    "Fazer hidratação consciente diária",
                    "Praticar técnicas de respiração e relaxamento",
                    "Fazer exames preventivos de rotina",
                    "Estudar sobre nutrição e bem-estar",
                    "Implementar suplementação personalizada",
                    "Criar diário de gratidão e reflexão pessoal"
                ],
                month2: [
                    "Avaliar níveis de estresse e energia",
                    "Implementar técnicas de desintoxicação natural",
                    "Praticar exercícios aeróbicos",
                    "Criar rotina de autocuidado mental",
                    "Fazer limpeza alimentar consciente",
                    "Praticar meditação guiada",
                    "Avaliar qualidade do sono",
                    "Fazer exercícios de fortalecimento muscular",
                    "Estudar técnicas de mindfulness",
                    "Criar plano de equilíbrio emocional"
                ],
                month3: [
                    "Desenvolver plano de treino com foco em flexibilidade",
                    "Implementar técnicas de nutrição para aumento de energia",
                    "Avaliar necessidades de micronutrientes",
                    "Criar protocolo de sono e recuperação para otimização metabólica",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição consciente",
                    "Avaliar progresso global e ajustar estratégias",
                    "Criar plano de manutenção e sustentabilidade da saúde",
                    "Desenvolver estratégias de gerenciamento de estresse relacionado à saúde",
                    "Implementar treino de alta performance para aumento de energia"
                ],
                month4: [
                    "Avaliar perfil inflamatório e estratégias de redução",
                    "Criar plano de treino com foco em equilíbrio corporal",
                    "Desenvolver técnicas de mindset transformacional",
                    "Realizar check-up nutricional e hormonal",
                    "Implementar estratégias de nutrição regenerativa",
                    "Avaliar progresso metabólico e ajustar estratégias",
                    "Criar protocolo de recuperação muscular e nutrição pós-treino",
                    "Desenvolver estratégias de gerenciamento de estresse relacionado à saúde",
                    "Implementar treino de alta performance para aumento de energia",
                    "Avaliar necessidades de suplementação para apoio ao treino"
                ],
                month5: [
                    "Implementar desafio de hidratação e nutrição celular",
                    "Criar plano de treino com foco em aumento de massa magra",
                    "Desenvolver técnicas de mindset para transformação corporal",
                    "Realizar check-up nutricional e hormonal completo",
                    "Implementar estratégias de nutrição regenerativa",
                    "Avaliar progresso metabólico e ajustar estratégias",
                    "Criar protocolo de recuperação muscular e nutrição pós-treino",
                    "Desenvolver estratégias de gerenciamento de estresse relacionado à saúde",
                    "Implementar treino de alta performance para aumento de energia",
                    "Avaliar necessidades de suplementação para apoio ao treino"
                ],
                month6: [
                    "Criar protocolo de desintoxicação natural e metabolismo",
                    "Desenvolver estratégias de nutrição para performance",
                    "Implementar treino de resistência e fortalecimento muscular",
                    "Avaliar progresso metabólico e ajustar estratégias",
                    "Criar plano de manutenção e estilo de vida saudável",
                    "Implementar técnicas avançadas de treinamento funcional",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de sono e recuperação para otimização metabólica",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição consciente"
                ],
                month7: [
                    "Avaliar perfil hormonal e estratégias de equilíbrio",
                    "Criar plano de treino com foco em metabolismo",
                    "Desenvolver técnicas de mindfulness para bem-estar",
                    "Realizar check-up nutricional completo",
                    "Implementar estratégias de nutrição integrativa",
                    "Avaliar progresso global e ajustar estratégias",
                    "Criar protocolo de recuperação muscular e nutrição pós-treino",
                    "Desenvolver estratégias de gerenciamento de estresse relacionado à saúde",
                    "Implementar treino de alta performance para aumento de energia",
                    "Avaliar necessidades de suplementação para apoio ao treino"
                ],
                month8: [
                    "Implementar técnicas avançadas de treinamento funcional",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de sono e recuperação metabólica",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição consciente",
                    "Avaliar necessidades de micronutrientes",
                    "Desenvolver plano de treino com foco em aumento de força",
                    "Implementar técnicas de modulação hormonal para saúde",
                    "Criar plano de manutenção e sustentabilidade da saúde",
                    "Avaliar progresso global e ajustar estratégias"
                ],
                month9: [
                    "Criar protocolo de modulação metabólica",
                    "Desenvolver estratégias de nutrição para longevidade",
                    "Implementar treino de alta performance",
                    "Avaliar progresso e ajustar estratégias",
                    "Criar plano de manutenção e saúde sustentável",
                    "Implementar técnicas avançadas de treinamento funcional",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de sono e recuperação para otimização metabólica",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição consciente"
                ],
                month10: [
                    "Implementar técnicas avançadas de treinamento",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de recuperação e descanso",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição intuitiva",
                    "Avaliar necessidades de micronutrientes",
                    "Desenvolver plano de treino com foco em aumento de força",
                    "Implementar técnicas de modulação hormonal para saúde",
                    "Criar plano de manutenção e sustentabilidade da saúde",
                    "Avaliar progresso global e ajustar estratégias"
                ],
                month11: [
                    "Avaliar perfil inflamatório e estratégias de redução",
                    "Criar plano de treino com foco em equilíbrio corporal",
                    "Desenvolver técnicas de mindset transformacional",
                    "Realizar check-up nutricional e hormonal",
                    "Implementar estratégias de nutrição regenerativa",
                    "Avaliar progresso metabólico e ajustar estratégias",
                    "Criar protocolo de recuperação muscular e nutrição pós-treino",
                    "Desenvolver estratégias de gerenciamento de estresse relacionado à saúde",
                    "Implementar treino de alta performance para aumento de energia",
                    "Avaliar necessidades de suplementação para apoio ao treino"
                ],
                month12: [
                    "Criar protocolo final de transformação corporal",
                    "Desenvolver estratégias de manutenção e estilo de vida",
                    "Implementar treino integrado de performance",
                    "Avaliar progresso global e resultados",
                    "Criar plano personalizado para próximo ciclo de saúde",
                    "Implementar técnicas avançadas de treinamento funcional",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de sono e recuperação para otimização metabólica",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição consciente"
                ]
            },
            combinedHealth: {
                month1: [
                    "Fazer avaliação nutricional integrada",
                    "Desenvolver plano alimentar personalizado",
                    "Implementar treino funcional de alta intensidade",
                    "Monitorar composição corporal",
                    "Criar diário de nutrição e exercícios",
                    "Praticar técnicas de mindfulness",
                    "Fazer exercícios de força e resistência",
                    "Estudar estratégias de emagrecimento saudável",
                    "Implementar rotina de sono regenerativo",
                    "Fazer hidratação consciente e nutritiva"
                ],
                month2: [
                    "Avaliar progresso metabólico",
                    "Desenvolver estratégias de modulação hormonal",
                    "Implementar treino de alta performance",
                    "Criar protocolo de recuperação muscular",
                    "Monitorar níveis de energia e disposição",
                    "Estudar técnicas avançadas de nutrição",
                    "Praticar exercícios de flexibilidade",
                    "Desenvolver estratégias de gerenciamento de estresse",
                    "Fazer check-up de micronutrientes",
                    "Criar plano de equilíbrio emocional e físico"
                ],
                month3: [
                    "Avaliar necessidade de ajustes no plano alimentar",
                    "Desenvolver plano de treino com foco em hipertrofia",
                    "Implementar técnicas de nutrição para aumento de massa magra",
                    "Monitorar progresso de composição corporal",
                    "Criar rotina de exercícios para fortalecimento muscular",
                    "Praticar técnicas de mindfulness para controle de estresse",
                    "Fazer avaliação de necessidades nutricionais",
                    "Desenvolver plano de suplementação para apoio ao treino",
                    "Implementar treino de alta intensidade para queima de gordura",
                    "Avaliar progresso global e ajustar estratégias"
                ],
                month4: [
                    "Avaliar perfil inflamatório e estratégias de redução",
                    "Implementar técnicas avançadas de treinamento funcional",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de sono e recuperação para otimização metabólica",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição consciente",
                    "Avaliar necessidades de micronutrientes",
                    "Desenvolver plano de treino com foco em aumento de força",
                    "Implementar técnicas de modulação hormonal para emagrecimento",
                    "Criar plano de manutenção e sustentabilidade do emagrecimento"
                ],
                month5: [
                    "Implementar desafio de hidratação e nutrição celular",
                    "Criar plano de treino com foco em aumento de massa magra",
                    "Desenvolver técnicas de mindset para transformação corporal",
                    "Realizar check-up nutricional e hormonal completo",
                    "Implementar estratégias de nutrição regenerativa",
                    "Avaliar progresso metabólico e ajustar estratégias",
                    "Criar protocolo de recuperação muscular e nutrição pós-treino",
                    "Desenvolver estratégias de gerenciamento de estresse relacionado à perda de peso",
                    "Implementar treino de alta performance para queima de gordura",
                    "Avaliar necessidades de suplementação para apoio ao treino"
                ],
                month6: [
                    "Criar protocolo de desintoxicação natural e metabolismo",
                    "Desenvolver estratégias de nutrição para performance",
                    "Implementar treino de resistência e fortalecimento muscular",
                    "Avaliar progresso metabólico e ajustar estratégias",
                    "Criar plano de manutenção e estilo de vida saudável",
                    "Implementar técnicas avançadas de treinamento funcional",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de sono e recuperação para otimização metabólica",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição consciente"
                ],
                month7: [
                    "Avaliar perfil hormonal e estratégias de equilíbrio",
                    "Criar plano de treino com foco em metabolismo",
                    "Desenvolver técnicas de mindfulness para bem-estar",
                    "Realizar check-up nutricional completo",
                    "Implementar estratégias de nutrição integrativa",
                    "Avaliar progresso global e ajustar estratégias",
                    "Criar protocolo de recuperação muscular e nutrição pós-treino",
                    "Desenvolver estratégias de gerenciamento de estresse relacionado à saúde",
                    "Implementar treino de alta performance para aumento de energia",
                    "Avaliar necessidades de suplementação para apoio ao treino"
                ],
                month8: [
                    "Implementar técnicas avançadas de treinamento funcional",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de sono e recuperação metabólica",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição consciente",
                    "Avaliar necessidades de micronutrientes",
                    "Desenvolver plano de treino com foco em aumento de força",
                    "Implementar técnicas de modulação hormonal para emagrecimento",
                    "Criar plano de manutenção e sustentabilidade do emagrecimento",
                    "Avaliar progresso global e ajustar estratégias"
                ],
                month9: [
                    "Criar protocolo de modulação metabólica",
                    "Desenvolver estratégias de nutrição para longevidade",
                    "Implementar treino de alta performance",
                    "Avaliar progresso e ajustar estratégias",
                    "Criar plano de manutenção e saúde sustentável",
                    "Implementar técnicas avançadas de treinamento funcional",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de sono e recuperação para otimização metabólica",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição consciente"
                ],
                month10: [
                    "Implementar técnicas avançadas de treinamento",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de recuperação e descanso",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição intuitiva",
                    "Avaliar necessidades de micronutrientes",
                    "Desenvolver plano de treino com foco em aumento de força",
                    "Implementar técnicas de modulação hormonal para emagrecimento",
                    "Criar plano de manutenção e sustentabilidade do emagrecimento",
                    "Avaliar progresso global e ajustar estratégias"
                ],
                month11: [
                    "Avaliar perfil inflamatório e estratégias de redução",
                    "Criar plano de treino com foco em equilíbrio corporal",
                    "Desenvolver técnicas de mindset transformacional",
                    "Realizar check-up nutricional e hormonal",
                    "Implementar estratégias de nutrição regenerativa",
                    "Avaliar progresso metabólico e ajustar estratégias",
                    "Criar protocolo de recuperação muscular e nutrição pós-treino",
                    "Desenvolver estratégias de gerenciamento de estresse relacionado à saúde",
                    "Implementar treino de alta performance para aumento de energia",
                    "Avaliar necessidades de suplementação para apoio ao treino"
                ],
                month12: [
                    "Criar protocolo final de transformação corporal",
                    "Desenvolver estratégias de manutenção e estilo de vida",
                    "Implementar treino integrado de performance",
                    "Avaliar progresso global e resultados",
                    "Criar plano personalizado para próximo ciclo de saúde",
                    "Implementar técnicas avançadas de treinamento funcional",
                    "Desenvolver estratégias nutricionais personalizadas",
                    "Criar protocolo de sono e recuperação para otimização metabólica",
                    "Monitorar evolução da composição corporal",
                    "Implementar desafio de nutrição consciente"
                ]
            }
        };
        this.currentFocus = null; 
    }

    generateChallenges(focus = null, monthIndex = null) {
        if (!focus && !this.currentFocus) {
            throw new Error("No challenge focus has been set");
        }

        const selectedFocus = focus || this.currentFocus;
        this.currentFocus = selectedFocus; 

        const challengeSets = this.challenges[selectedFocus];
        
        // If no month index is provided, use current month or default to month1
        const selectedMonth = monthIndex 
            ? `month${monthIndex}` 
            : 'month1';

        const monthChallenges = challengeSets[selectedMonth];

        if (!monthChallenges) {
            throw new Error(`No challenges found for ${selectedMonth} in ${selectedFocus}`);
        }

        // Ensure always 10 challenges
        return this.shuffleChallenges(monthChallenges).slice(0, 10);
    }

    shuffleChallenges(challenges) {
        return challenges
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }
}