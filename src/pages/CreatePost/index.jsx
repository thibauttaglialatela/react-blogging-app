const Index = () => {
    return (
        <form>
            <h1>Ajouter un post</h1>
            <input type={'text'} name={'title'} placeholder={'Titre du post'}/>
            <textarea name={'content'} placeholder={'Contenu du post'}/>
            <input type={'submit'} value={'enregistrer'}/>
        </form>
    )
}

export default Index;
