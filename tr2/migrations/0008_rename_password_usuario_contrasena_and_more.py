# Generated by Django 5.0.6 on 2024-06-05 22:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tr2', '0007_remove_usuario_groups_remove_usuario_is_active_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usuario',
            old_name='password',
            new_name='contrasena',
        ),
        migrations.RenameField(
            model_name='usuario',
            old_name='username',
            new_name='nom_usuario',
        ),
    ]