const Annotations = require('../models/AnnotationData');

module.exports = {

    //recebendo todos os registros
    //toda função q busque dados de fora vamos usar async e await para n quebrar o cod
    async read(request, response){
        const annotationList = await Annotations.find();
        return response.json(annotationList);
    },

    //criando atravéz de inserir dados
     async create(request, response){ 
        const { title, notes, priority } = request.body;

        //validação para evitar erros
        if(!notes || !title){
            return response.status(400).json({ error: 'Necessário um titulo/anotação'})
        }

        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        });

        return response.json(annotationCreated);
    },

    //deletar pelo id que formos buscar
    async delete(request, response){
        //pega o id da url
        const { id } = request.params;
        //operador do mongo, encontra o elemento com esse id e delete (2operacoes em 1)
        const annotationDeleted = await Annotations.findOneAndDelete({ _id: id });
        if (annotationDeleted) {
            return response.json(annotationDeleted)
        }
        return response.status(401).json({error: 'Não foi encontrado o registro para deletar'});

    }


}