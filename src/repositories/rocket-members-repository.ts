// Usar classe abstrata, pois com interface, o Nest não consegue fazer a injeção de dependências automaticamente (JS não lê o nome da interface, que é algo específico do TypeScript)

export abstract class RocketMembersRepository {
    abstract create(name: string, memberFunction: string): Promise<void>;
}
