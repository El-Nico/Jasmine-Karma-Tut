import { Component } from "@angular/core"
import { PostComponent } from "./postComponent"

describe('Post Component', () => {
    let component: PostComponent
    //lifecycle hooks -- only once
    //before -> setup
    //after -> teardown
    beforeAll(() => {

    })
    beforeEach(() => {
        //Arrange
        component = new PostComponent();
        component.totalLikes = 3;
    })
    afterAll(() => {
        component=null;
    })
    afterEach(() => {

    })

    it('should increment likes 👍', () => {
        //Act
        component.like()
        //Assert
        expect(component.totalLikes).toBe(4);
    })

    it('should decrement likes 👎 ', () => {
        //Act
        component.dislike()
        //Assert
        expect(component.totalLikes).toBe(2);
    })
})