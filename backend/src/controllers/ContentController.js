const Annotations = require('../models/AnnotationData');


module.exports = {

    async update (request, response){
        const { id } = request.params;
        const { notes } = request.body;
        const annotation = await Annotations.findOne({_id : id});
        //sobrescrevendo anotação
        if(notes){ //segurança, caso anotação esteja false ou true
            annotation.notes = notes;
            await annotation.save();
        }
        return response.json(annotation);
    }

}