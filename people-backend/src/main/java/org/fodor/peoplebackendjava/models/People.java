package org.fodor.peoplebackendjava.models;

import org.springframework.data.annotation.Id;

public class People {
    @Id
    public String id;
    public String name;
    public boolean hasPhoto;
    public boolean isGroup;
    public String group;
    public String title;
    public String liaison;

    public People(String name, boolean hasPhoto, boolean isGroup, String group, String title, String liaison) {
        this.name = name;
        this.hasPhoto = hasPhoto;
        this.isGroup = isGroup;
        this.group = group;
        this.title = title;
        this.liaison = liaison;
    }

    @Override
    public String toString() {
        return String.format("%s (%s)", this.name, this.title);
    }
}
