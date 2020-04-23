function postedBy(parent, args, context) {
    return context.prisma.link({ id: parent.id }).posteBy()
}

module.exports ={
    postedBy
}
